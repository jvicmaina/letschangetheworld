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
          return{
             impact: reportedCases*10,
             severeImpact:reportedCases *50
          }
       };
       //infections here being infections by requested time
     const infectionsAtTimeX=(currentlyInfected,timeToLapse)=>{

        infectionsByRequestedTime=impact.currentlyInfected *(Math.pow(2,Math.trunc(timeToElapse/3)))
        severeInfectionsByRequestedTime=severeImpact.currentlyInfected *(Math.pow(2,Math.trunc(timeToElapse/3)))
        
        return {
           impact:infectionsByRequestedTime,
           severeImpact:infectionsByRequestedTime,
           
         }
      
         const severeAtTimeX=(infectionsByRequestedTime)=>{
        severeCasesByRequestedTime= impact.infectionsByRequestedTime *(0.15)
        severeCasesByRequestedTime= severeImpact.infectionsByRequestedTime *(0.15)
         return{
            impact:severeCasesByRequestedTime*0.15,
            severeImpact:severeCasesByRequestedTime*0.15
         }
      }
      //const severeAtTimeX
     // severeCasesByRequestedTime=(0.15*infectionsByRequestedTime)
      const bedsAtTimeX=(severeCasesByRequestedTime,totalHospitalBeds)=>{
         hospitalBedsByRequestedTime= impact.severeCasesByRequestedTime - (totalHospitalBeds *(0.35))
         hospitalBedsByRequestedTime= severeImpact.severeCasesByRequestedTime - (totalHospitalBeds *(0.35))
         return{
            impact:hospitalBedsByRequestedTime,
            severeImpact:hospitalBedsByRequestedTime
         }

      }
    const casesForIcuAtTimeX=(infectionsByRequestedTime)=>{
casesForICUByRequestedTime=impact.severeCasesByRequestedTime*(0.05)
casesForICUByRequestedTime=severeImpact.severeCasesByRequestedTime*(0.05)
return{
   impact:casesForICUByRequestedTime,
   severeImpact:casesForICUByRequestedTime
}
      }
    const casesForVentilatorsAtTimeX=()=>{
      casesForVentilatorsByRequestedTime=impact.severeCasesByRequestedTime*(0.02)
      casesForVentilatorsByRequestedTime=severeImpact.severeCasesByRequestedTime*(0.02)
      return{
         impact:casesForVentilatorsByRequestedTime,
         severeImpact:casesForVentilatorsByRequestedTime
      }

    }
    const dollarsInFlightForEconomyX =(avgDailyIncomeInUSD,avgDailyIncomePopulation)=>{
       dollarsInFlight=impact.infectionsByRequestedTime*avgDailyIncomePopulation*(avgDailyIncomeInUSD*timeToElapse)
       dollarsInFlight=severeImpact.infectionsByRequestedTime*avgDailyIncomePopulation*(avgDailyIncomeInUSD*timeToElapse)
       return{
          impact:dollarsInFlight,
          severeImpact:dollarsInFlight
       }
    }

export default covid19ImpactEstimator;
