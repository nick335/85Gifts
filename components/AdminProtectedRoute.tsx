import { Navigate } from 'react-router-dom'

interface AdminProtectedRouteProps {
  children: React.ReactNode
}

const AdminProtectedRoute = ({ children }: AdminProtectedRouteProps) => {
  const isAdminAuthenticated = localStorage.getItem('authToken')

  return isAdminAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to='/admin/login' replace />
  )
}

export default AdminProtectedRoute
