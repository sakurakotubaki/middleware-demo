'use client'

import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast'

export default function Blog() {
  const router = useRouter()

  const handleLogout = () => {
    Cookies.remove('auth-token')
    toast.success('ログアウトしました')
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">ブログページ</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              ログアウト
            </button>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700">
              ここは認証が必要なブログページです。ログインしているユーザーのみがアクセスできます。
            </p>
            {/* ここにブログコンテンツを追加できます */}
          </div>
        </div>
      </div>
    </div>
  )
}
