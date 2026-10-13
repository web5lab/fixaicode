import sharp from 'sharp'
import { readFile, mkdir, writeFile } from 'node:fs/promises'
const { assets, generator } = JSON.parse(await readFile(new URL('./generated-images.json', import.meta.url), 'utf8'))
await mkdir('public/images', { recursive: true })
for (const asset of assets) {
  for (const width of [1536, 768]) {
    const output = `public/images/${asset.name}${width === 768 ? '-768' : ''}.webp`
    await sharp(asset.source).resize({ width }).webp({ quality: 87, effort: 6 }).toFile(output)
    console.log(output)
  }
}
await writeFile('public/images/GENERATION.md', `# Original artwork\n\nGenerated with ${generator}. All final assets are copied into this project as responsive WebP images.\n\n` + assets.map(asset => `## ${asset.name}\n\nFiles: ${asset.name}.webp, ${asset.name}-768.webp\n\n${asset.prompt}\n`).join('\n'))
