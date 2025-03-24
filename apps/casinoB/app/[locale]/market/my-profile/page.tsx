import Profile from '@repo/ui/profile'

export default function ProfilePage({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <Profile params={params} />
  )
}
