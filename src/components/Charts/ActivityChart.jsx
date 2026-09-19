'use client'

import { FriendContext } from "@/contexts/FriendsProvider";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const ActivityChart = ({ isAnimationActive = true }) => {
  const { timeLine, setTimeLine } = useContext(FriendContext)

  const callCount = timeLine.filter(item => item.activityType === 'call').length;
  const textCount = timeLine.filter(item => item.activityType === 'text').length;
  const videoCount = timeLine.filter(item => item.activityType === 'video').length;

  const data = [
    {name: 'Call', value:callCount, fill: '#244D3F'},
    {name: 'Text', value:textCount, fill: '#7F37F5'},
    {name: 'Video', value:videoCount, fill: '#37A163'},
  ];

  const totalData = callCount + textCount + videoCount;

  return (
    <div>
        {
            totalData == 0 ? <div>
                <div className="text-center py-10 border-2 border-dashed text-3xl border-gray-200 rounded-xl">
                    <p className="text-gray-400">No activity data available to show in chart.</p>
                </div>
            </div> : <div className="flex justify-center">
                <PieChart style = {{width: '100%', maxWidth:'500px', maxHeight: '80vh', aspectRatio: 1}} responsive>
                    <Pie
                        data = {data}
                        innerRadius="80%"
                        outerRadius = "100%"
                        cornerRadius= "50%"
                        fill = "#8884D8"
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={isAnimationActive}
                    />
                    <Tooltip/>

                    <Legend/>
                </PieChart>
            </div>
        }
    </div>
  )
};

export default ActivityChart;