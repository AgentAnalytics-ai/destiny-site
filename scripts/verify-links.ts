#!/usr/bin/env node

import { PC_ADMIN } from '../lib/config/pc-links'
import { env } from '../lib/utils/env'

interface LinkResult {
  url: string
  status: number
  ok: boolean
  error?: string
}

async function checkLink(url: string): Promise<LinkResult> {
  try {
    const response = await fetch(url, { 
      method: 'HEAD',
      redirect: 'follow'
    })
    
    return {
      url,
      status: response.status,
      ok: response.ok || response.status === 401 || response.status === 403, // 401/403 are acceptable for admin pages
    }
  } catch (error) {
    return {
      url,
      status: 0,
      ok: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

async function verifyLinks() {
  console.log('🔍 Verifying Church Center and Planning Center links...\n')
  
  const allLinks: { label: string; href: string }[] = []
  
  // Add quick links
  PC_ADMIN.quickLinks.forEach(link => {
    allLinks.push({ label: `Quick: ${link.label}`, href: link.href })
  })
  
  // Add section links
  PC_ADMIN.sections.forEach(section => {
    section.links.forEach(link => {
      allLinks.push({ label: `${section.title}: ${link.label}`, href: link.href })
    })
  })
  
  console.log(`Found ${allLinks.length} links to verify\n`)
  
  const results: LinkResult[] = []
  
  for (const link of allLinks) {
    process.stdout.write(`Checking ${link.label}... `)
    const result = await checkLink(link.href)
    results.push(result)
    
    if (result.ok) {
      console.log(`✅ ${result.status}`)
    } else {
      console.log(`❌ ${result.status} ${result.error || ''}`)
    }
  }
  
  console.log('\n�� Summary:')
  const successful = results.filter(r => r.ok).length
  const failed = results.filter(r => !r.ok).length
  
  console.log(`✅ Successful: ${successful}`)
  console.log(`❌ Failed: ${failed}`)
  
  if (failed > 0) {
    console.log('\n❌ Failed links:')
    results.filter(r => !r.ok).forEach(result => {
      console.log(`  ${result.url} (${result.status})`)
    })
    process.exit(1)
  } else {
    console.log('\n�� All links verified successfully!')
  }
}

// Run if called directly
if (require.main === module) {
  verifyLinks().catch(console.error)
}
