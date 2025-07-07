"use client"

interface ModernTabsProps {
  tabs: Array<{
    id: string
    label: string
    icon?: string
  }>
  activeTab: string
  onTabChange: (tabId: string) => void
  className?: string
}

export function ModernTabs({ tabs, activeTab, onTabChange, className = "" }: ModernTabsProps) {
  return (
    <div className={`w-full mb-12 ${className}`}>
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 p-1 rounded-xl inline-flex shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeTab === tab.id
                  ? "bg-white text-blue-600 shadow-sm transform scale-105"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {tab.icon && <span className="text-lg">{tab.icon}</span>}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
