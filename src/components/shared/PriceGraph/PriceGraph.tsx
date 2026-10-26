import { convertMonth } from '@/utils/utils'
import type { IPriceGraphProps } from './type'
import type { TMonth } from '@/types/places/types'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export const PriceGraph = ({ pricesPerMonth }: IPriceGraphProps) => {
  const data = pricesPerMonth.map((item, index) => {
    return {
      month: convertMonth(index as TMonth, 'short'),
      value: item
    }
  })

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="12 12"/>
        <XAxis dataKey="month"/>
        <YAxis domain={['dataMin', 'dataMax']}/>
        <Tooltip/>
        <Line type="monotone" dataKey="value" stroke="#8884d8"/>
      </LineChart>
    </ResponsiveContainer>
  )
}