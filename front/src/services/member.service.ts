
import { Member } from '../types/members'
import FetchClient from './fetchClient.service'

const addMember = async (form: Member) => {
  return FetchClient.post<Member>({
    endpoint: '/api/members',
    body: form,
  }).then((res) => {
    return res
  })
}

const getMembers = async () => {
  return FetchClient.get<Member[]>({
    endpoint: '/api/members'
  }).then((res) => {
    return res;
  })
}

export const memberService = {
  addMember,
  getMembers,
}