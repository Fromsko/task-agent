import React from 'react'
import Demo from '../../layouts/demo'

const MainContent: React.FC = () => {
  return (
    <main className="pt-10">
      {/* Hero部分 */}
      <Demo/>

      <div className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-base-content mb-6">AI驱动的代码编辑器</h1>
            <p className="text-xl text-base-content/80 mb-8">
              使用最先进的AI技术提升您的编程效率。智能代码补全、实时代码分析、自动重构等功能助您事半功倍。
            </p>
            <div className="flex justify-center space-x-4">
              {/* <Link to={'/download'} className="btn btn-primary">立即开始</Link>
              <Link to={'https://github.com/fromsko'} className="btn btn-outline">了解更多</Link> */}
            </div>
          </div>
        </div>
      </div>

      {/* 特性展示部分 */}
      <div className="py-44 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">智能代码补全</h3>
                <p className="text-base-content/70">基于上下文的智能代码建议，提高编码速度</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">实时代码分析</h3>
                <p className="text-base-content/70">即时发现潜在问题，提供优化建议</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">自动代码重构</h3>
                <p className="text-base-content/70">一键优化代码结构，提升代码质量</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainContent
