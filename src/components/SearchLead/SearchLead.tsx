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
          'http://localhost:3000/api/SearchLeadData?userid=abhinav.singh%40dayibpl.com&phoneno=9958735482'
        )
        .then((res) => res.data)
  })
  return (
    <div>
      <SearchLeadForm />
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </div>
  )
}
export default SearchLead
