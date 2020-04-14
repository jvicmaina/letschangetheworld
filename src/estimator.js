const covid19ImpactEstimator = (data) => {
currentlyInfected =infected(data.reportedCases)
infectionsByRequestedTime =infectionsAtTimeX (currentlyInfected, data.timeToElapse)
severeCasesByRequestedTime =severeAtTimeX (totalHospitalBeds,infectionsByRequestedTime)
hospitalBedsByRequestedTime=bedsAtTimeX(totalHospitalBeds,infectionsByRequestedTime)
casesForICUByRequestedTime=casesForIcuAtTimeX(infectionsByRequestedTime)
casesForVentilatorsByRequestedTime=casesForVentilatorAtTimeX(infectionsByRequestedTime)
dollarsInFlight= dollarsInFlightForEconomyX(avgDailyIncomeInUSD,data.timeToElapse,avgDailyIncomePopulation)
};

       const infected = (reportedCases) =>{
              let result={
                   data:{},
                   impact:{},
                   severeImpact:{}
            }
        
          return{
             impact: reportedCases*10,
             severeImpact:reportedCases *50
          }
       };
       //infections here being infections by requested time
     const infectionsAtTimeX=(currentlyInfected,timeToLapse)=>{

        infectionsByRequestedTime=currentlyInfected.impact *(Math.pow(2,Math.trunc(timeToElapse/3)))
        severeInfectionsByRequestedTime=currentlyInfected.severeImpact *(Math.pow(2,Math.trunc(timeToElapse/3)))
            let result={
                   data:{},
                   impact:{},
                   severeImpact:{}
            }
        
        return {
           impact:infectionsByRequestedTime,
           severeImpact:infectionsByRequestedTime,
           
         }
      
         const severeAtTimeX=(infectionsByRequestedTime)=>{
        severeCasesByRequestedTime= infectionsByRequestedTime.impact *(0.15)
        severeCasesByRequestedTime= infectionsByRequestedTime.severeImpact *(0.15)
                let result={
                   data:{},
                   impact:{},
                   severeImpact:{}
            }
        
         return{
            impact:severeCasesByRequestedTime*0.15,
            severeImpact:severeCasesByRequestedTime*0.15
         }
      }
      //const severeAtTimeX
     // severeCasesByRequestedTime=(0.15*infectionsByRequestedTime)
      const bedsAtTimeX=(severeCasesByRequestedTime,totalHospitalBeds)=>{
         hospitalBedsByRequestedTime= severeCasesByRequestedTime.impact - (totalHospitalBeds *(0.35))
         hospitalBedsByRequestedTime= severeCasesByRequestedTime.severeImpact - (totalHospitalBeds *(0.35))
             let result={
                   data:{},
                   impact:{},
                   severeImpact:{}
            }
        
         return{
            impact:hospitalBedsByRequestedTime,
            severeImpact:hospitalBedsByRequestedTime
         }

      }
    const casesForIcuAtTimeX=(infectionsByRequestedTime)=>{
casesForICUByRequestedTime=severeCasesByRequestedTime.impact*(0.05)
casesForICUByRequestedTime=severeCasesByRequestedTime.severeImpact*(0.05)
           let result={
                   data:{},
                   impact:{},
                   severeImpact:{}
            }
        
return{
   impact:casesForICUByRequestedTime,
   severeImpact:casesForICUByRequestedTime
}
      }
    const casesForVentilatorsAtTimeX=()=>{
      casesForVentilatorsByRequestedTime=severeCasesByRequestedTime.impact*(0.02)
      casesForVentilatorsByRequestedTime=severeCasesByRequestedTime.severeImpact*(0.02)
           let result={
                   data:{},
                   impact:{},
                   severeImpact:{}
            }
        
      return{
         impact:casesForVentilatorsByRequestedTime,
         severeImpact:casesForVentilatorsByRequestedTime
      }

    }
    const dollarsInFlightForEconomyX =(avgDailyIncomeInUSD,avgDailyIncomePopulation)=>{
       dollarsInFlight=infectionsByRequestedTime.impact *avgDailyIncomePopulation*(avgDailyIncomeInUSD*timeToElapse)
       dollarsInFlight=infectionsByRequestedTime.severeImpact *avgDailyIncomePopulation*(avgDailyIncomeInUSD*timeToElapse)
           let result={
                   data:{},
                   impact:{},
                   severeImpact:{}
            }
        
       return{
          impact:dollarsInFlight,
          severeImpact:dollarsInFlight
       }
    }

covid19ImpactEstimatorImpactEstimator(data);
