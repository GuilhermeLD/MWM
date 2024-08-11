import { Link, usePathname } from "expo-router"
import { Text, View } from "react-native"


export default function Tabs() {
  const pathName = usePathname() 
  const tabs = [{
    name: "futuro",
    path: "/",
    isActived: pathName==="/",
  },{
  name: "passado",
  path: "/past",
  isActived: pathName==="/past"
}] 
  
  return (
      <View className="top-36 flex flex-row px-4 gap-4">
        {tabs.map(tab => (
          <View key={tab.name} className={tab.isActived ? 'border-b-2 pb-px border-primary' : ''}>
          <Link href={tab.path} className={tab.isActived ? 'font-title color-primary text-2xl' : 'font-light color-unselected text-2xl'}>{tab.name}</Link>
        </View>
        ))}
        </View>
        
  )
  
}


