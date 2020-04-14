const covid19ImpactEstimator = (data) => data;
export default covid19ImpactEstimator;
{  
   
      impact: {
        
          impact.currentlyInfected + "is" ; reportedCases * 10 ;
        impact.infectionsByRequestedTime + "is"; currentlyInfected *1024;
        impact.severeCasesByRequestedTime +"is";15 % infectionsByRequestedTime;
        impact.hospitalBedsByRequestedTime + "is" ;35% totalHospitalBeds ;
        impact.casesForICUByRequestedTime + "is"; 5% infectionsByRequestedTime;
        impact.dollarsInFlight +  "is";avgDailyIncomeInUSD*30*(0.65*infectionsByRequestedTime);

      }        // your best case estimation   
     severeImpact: {const covid19ImpactEstimator = (data) => {
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

        infectionsByRequestedTime=currentlyInfected.impact *(Math.pow(2,Math.trunc(timeToElapse/3)))
        severeInfectionsByRequestedTime=currentlyInfected.severeImpact *(Math.pow(2,Math.trunc(timeToElapse/3)))
        
        return {
           impact:infectionsByRequestedTime,
           severeImpact:infectionsByRequestedTime,
           
         }
      
         const severeAtTimeX=(infectionsByRequestedTime)=>{
        severeCasesByRequestedTime= infectionsByRequestedTime.impact *(0.15)
        severeCasesByRequestedTime= infectionsByRequestedTime.severeImpact *(0.15)
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
         return{
            impact:hospitalBedsByRequestedTime,
            severeImpact:hospitalBedsByRequestedTime
         }

      }
    const casesForIcuAtTimeX=(infectionsByRequestedTime)=>{
casesForICUByRequestedTime=severeCasesByRequestedTime.impact*(0.05)
casesForICUByRequestedTime=severeCasesByRequestedTime.severeImpact*(0.05)
return{
   impact:casesForICUByRequestedTime,
   severeImpact:casesForICUByRequestedTime
}
      }
    const casesForVentilatorsAtTimeX=()=>{
      casesForVentilatorsByRequestedTime=severeCasesByRequestedTime.impact*(0.02)
      casesForVentilatorsByRequestedTime=severeCasesByRequestedTime.severeImpact*(0.02)
      return{
         impact:casesForVentilatorsByRequestedTime,
         severeImpact:casesForVentilatorsByRequestedTime
      }

    }
    const dollarsInFlightForEconomyX =(avgDailyIncomeInUSD,avgDailyIncomePopulation)=>{
       dollarsInFlight=infectionsByRequestedTime.impact *avgDailyIncomePopulation*(avgDailyIncomeInUSD*timeToElapse)
       dollarsInFlight=infectionsByRequestedTime.severeImpact *avgDailyIncomePopulation*(avgDailyIncomeInUSD*timeToElapse)
       return{
          impact:dollarsInFlight,
          severeImpact:dollarsInFlight
       }
    }

export default covid19ImpactEstimator;

     
