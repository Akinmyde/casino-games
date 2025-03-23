import NextAuth from "next-auth"
import { handlers} from './auth'
import CredentialsProvider from 'next-auth/providers/credentials'
// import userDb from './api/db/users.json'
import { User } from "@repo/types/user"

export const { GET, POST } = handlers;
