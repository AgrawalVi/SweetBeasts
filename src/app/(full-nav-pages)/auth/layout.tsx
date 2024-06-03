const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-grow items-center justify-center">
      {children}
    </div>
  )
}

export default AuthLayout
