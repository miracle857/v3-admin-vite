// import axios from "axios"
//
// export function testStream() {
//   const url = "http://localhost:3434/sse/stream2"
//   axios
//     .get(url, { responseType: "text", headers: { Accept: "text/event-stream" } })
//     .then(() => {
//       const eventSource = new EventSource(url)
//       eventSource.onmessage = (event) => {
//         console.log(event.data)
//         console.log("Received event: " + JSON.stringify(event))
//       }
//
//       eventSource.onerror = (error) => {
//         console.error("EventSource error:", error)
//         eventSource.close()
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching SSE stream:", error)
//     })
// }
//
//
