//Rename this service to GraduationReportService
import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
})
export default {
  getAchievementReport(id, token) {
    const headers = { Accept: 'application/json','Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Authorization': 'Bearer '+ token, "responseType": "arraybuffer" }
    return apiClient.get('/api/v1/graduationreports/studentreport/?studentID=' + id + '&reportType=ACHV',{ headers, responseType: 'arraybuffer'});
  },
  getStudentTranscript(id, token) {
    const headers = { Accept: 'application/json','Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Authorization': 'Bearer '+ token, "responseType": "arraybuffer" }
    return apiClient.get('/api/v1/graduationreports/studentreport/?studentID=' + id + '&reportType=TRAN',{ headers, responseType: 'arraybuffer'});
  },
  getStudentReports(id,token){
    const headers = { Accept: 'application/json','Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Authorization': 'Bearer '+ token, "responseType": "arraybuffer" }
    return apiClient.get('/api/v1/graduationreports/studentreport/' + id,{ headers });
  },
  getStudentCertificates(id, token){
    const headers = { Accept: 'application/json','Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Authorization': 'Bearer '+ token }
    return apiClient.get('/api/v1/graduationreports/studentcertificate/' + id,{ headers});
  },

  getCertificateTypes(token) {
      const headers = { Accept: 'application/json','Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Authorization': 'Bearer '+ token }
      return apiClient.get('/api/v1/graduationreports/certificatetype',{ headers });
  },
  getTranscriptsTypes(token) {
    const headers = { Accept: 'application/json','Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Authorization': 'Bearer '+ token }
    return apiClient.get('/api/v1/graduationreports/transcripttype',{ headers });
  },  
  getProgramCertificateTranscripts(token){
    const headers = { Accept: 'application/json','Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Authorization': 'Bearer '+ token }
    return apiClient.get('/api/v1/graduationreports/allprogramcertificates',{ headers });
  },
  getReportTypes(token) {
      const headers = { Accept: 'application/json','Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Authorization': 'Bearer '+ token }
      return apiClient.get('/api/v1/graduationreports/reporttype',{ headers });
  },
  getDocumentStatusCodes(token) {
    const headers = { Accept: 'application/json','Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Authorization': 'Bearer '+ token }
    return apiClient.get('/api/v1/graduationreports/documentstatus',{ headers });
  },
  getDigitalSignatures(token) {
    const headers = { Accept: 'application/json','Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Authorization': 'Bearer '+ token }
    return apiClient.get('/api/v1/signatures/get/all',{ headers });
    
  },
  getDigitalSignaturesBlockTypes(token) {
    const headers = { Accept: 'application/json','Content-Type': 'application/json',"Access-Control-Allow-Origin": "*",'Authorization': 'Bearer '+ token }
    return apiClient.get('/api/v1/signatures/getSignatureBlockTypeCodes',{ headers });
  } 
 
}
