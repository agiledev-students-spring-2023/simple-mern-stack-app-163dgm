import axios from 'axios'
import { useEffect, useState } from 'react'
import loadingIcon from './loading.gif'

const AboutUs = () => {
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const [error, setError] = useState('')
  const [loaded, setLoaded] = useState(false)

  const fetchPageData = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about-us`)
      .then(res => {
        setDescription(res.data.description)
        setImageUrl(res.data.imageUrl)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoaded(true)
      })
  }

  useEffect(() => {
    fetchPageData()
  }, [])

  return (
    <>
      <article>
        <h1>About Us</h1>
        {error && <p className="Messages-error">{error}</p>}
        {!loaded && <img src={loadingIcon} alt="loading" />}
        <p>{description}</p>
        <img src={imageUrl} alt="us" />
      </article>
    </>
  )
}

export default AboutUs
