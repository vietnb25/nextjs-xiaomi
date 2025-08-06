// // API  for the game

// // 1. Game Session Start API
//     Method: POST 
//     Payload:
//         {
//         "userId": "user_xyz",
//         "deviceType": "Redmi Note 13 Pro"
//         }
//     Response:
//         {
//         "success": true,
//         "data": {
//             "sessionId": "session_xyz",
//             "questions": [
//             {
//                 "id": 1,
//                 "type": "quiz",
//                 "text": "Màn hình của điện thoại Redmi Note 13 có tần số quét là bao nhiêu?",
//                 "options": [
//                 {"id": "A", "text": "60Hz", "isCorrect": false},
//                 {"id": "B", "text": "120Hz AMOLED", "isCorrect": true}
//                 ]
//             }
//             ]
//         }
//         }

// // 2. Submit Quiz Answer API
//         Method: POST 
//         Payload:
//             {
//             "sessionId": "session_xyz",
//             "questionId": 1,
//             "selectedAnswer": "B",
//             "timeTaken": 15000
//             }
//         Response:
//             {
//             "success": true,
//             "data": {
//                 "isCorrect": true,
//                 "correctAnswer": "B",
//                 "explanation": "Redmi Note 13 có màn hình 120Hz AMOLED",
//                 "nextQuestion": {
//                 "id": 2,
//                 "type": "quiz",
//                 "text": "Camera chính có độ phân giải bao nhiêu?"
//                 }
//             }
//             }

// //3. Upload Selfie API
//     Method: POST 
//     Payload:
//         {
//         "sessionId": "session_xyz",
//         "image": "xyz",
//         "faceConfirmed": true
//         }
//     Response:
//         {
//         "success": true,
//         "data": {
//             "imageUrl": "xyz.jpg",
//             "faceDetected": true,
//             "imageId": "img_xyz"
//         }
//         }

// //4. Get Reward Information API
//     Method: GET
//     Response:
//         {
//         "success": true,
//         "data": {
//             "totalRewards": 1,
//             "rewards": [
//             {
//                 "rewardId": "xyz",
//                 "amount": 20000,
//                 "currency": "VND",
//                 "status": "available"
//             }
//             ]
//         }
//         }


// // 5. Create User Information API
//     Method: POST 
//     Payload:
//         {
//         "firstName": "xyz",
//         "lastName": "xyz",
//         "email": "xyz",
//         "phone": "xyz",
//         "city": "xyz",
//         "district": "xyz",
//         "ward": "xyz",
//         "address": "xyz"
//         }

//     Response:
//         {
//         "success": true,
//         "data": {
//             "userId": "xyz",
//             "message": "xyz"
//         }
//         }

// // 6. Submit Device Code API  
//     Method: POST 
//     Payload:
//         {
//         "userId": "xyz",
//         "store": "xyz",
//         "device": "xyz",
//         "code": "xyz"
//         }

//     Response:
//         {
//         "success": true,
//         "data": {
//             "codeId": "xyz",
//             "isValid": true,
//             "message": "xyz"
//         }
//         }

