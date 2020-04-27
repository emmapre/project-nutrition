import React from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

export const LoadingIndicator = () => {
  const isLoading = useSelector(state => state.loading.isLoading)

  return (
    <>
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="#000"
          height={80}
          width={80}
          timeOut={3000} />)}
    </>)
}
