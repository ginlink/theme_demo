
export default async function main() {
  const promise = new Promise((resolve) => {
    resolve(123)
  })

  const res = await promise
  console.log('[res]:', res)
}
