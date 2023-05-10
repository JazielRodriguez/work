import React from 'react'
import SearchLeadForm from './SearchLeadForm'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const SearchLead: React.FC = () => {
  const { data } = useQuery({
    queryKey: ['SearchLead'],
    queryFn: () =>
      axios
        .post(
          'https://work-gules.vercel.app/api/SearchLeadData?userid=abhinav.singh%40dayibpl.com&phoneno=9958735482'
        )
        .then((res) => res.data)
  })
  const { data: dataTwo } = useQuery({
    queryKey: ['SearchLeadHyperLink'],
    queryFn: () =>
      axios
        .post(
          'https://work-gules.vercel.app/api/GetLeadData?staffid=%20abhinav.singh%40dayibpl.com&leadid=CALL202102202705'
        )
        .then((res) => res.data)
  })
  return (
    <div>
      <SearchLeadForm />
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
      <div dangerouslySetInnerHTML={{ __html: dataTwo }}></div>
    </div>
  )
}
export default SearchLead
