import { client } from 'lib.api'

const getStaticProps = async () => {
  const resPromise = client.get({
    endpoint: 'blogs'
  })

  try {
    const res = await resPromise
    console.log(res)
  } catch (err) {
    console.log(err)
  }

  return {
    props: {}
  }
}

export { getStaticProps }
