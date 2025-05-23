import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        credentials: {
            username: {},
            password: {}
        },
        name: "Credentials",
        async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            const user = { id: "1", name: "J Smith", username: "player1", password: 'player1' }

            if (user) {
                // Any object returned will be saved in `user` property of the JWT
                return user
            } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null

                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
        }
    })
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)