import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import { AppContext } from '../../api/AppContext'

export default ({ title, prevPage, nextPage, children, shouldSubmit }) => {
  const { api, data, setData } = React.useContext(AppContext)
  const history = useHistory()
  const [send, setSend] = useState(false)
  useEffect(() => {
    const sendData = async () => {
      await api.completeOnboarding(data)
      history.push(nextPage)
    }
    if (send) {
      sendData()
    }
  }, [shouldSubmit, data])
  return (
    <PageLayout
      onClickSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const dataf = {}
        for (let item of formData.entries()) {
          dataf[item[0]] = item[1]
        }
        setData((data) => ({
          ...data,
          ...dataf
        }))
        if (shouldSubmit) return setSend(true)
        history.push(nextPage)
      }}
      title={title}
      submitButtonTitle="Continue"
      header={prevPage && <Breadcrumbs items={
        [{
          name: "Back",
          route: {prevPage}
        }]
      } />}
    >
      {children}
    </PageLayout>
  );
};
