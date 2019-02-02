const event = {
    "deviceId": "9bde4d3e-dfc7-4b31-90bc-9032961793c0",
    "readings": [
        {
            "path": "",
            "meaning": "humidity",
            "value": 24.012
        }
    ],
    "received": 1479907316977
}

const queue = [ '{"deviceId":"9bde4d3e-dfc7-4b31-90bc-9032961793c0","readings":[{"path":"","meaning":"humidity","value":24.012}],"received":1479907316977}',
'{"deviceId":"e6d081cb-ed06-4817-bd7a-5eb781a4109c","readings":[{"path":"","meaning":"angularSpeed","value":{"x":0.366,"y":0,"z":2.075}}],"received":1479907324887}',
'[{"bn":"amb1/modbus/etima-strom/","bt":1480001428.655},{"n":"V a-n","v":230.5494384765625,"u":"V"},{"n":"V b-n","v":230.12722778320312,"u":"V"},{"n":"V c-n","v":230.29534912109375,"u":"V"},{"n":"I a","v":24.63257598876953,"u":"A"},{"n":"I b","v":25.195981979370117,"u":"A"},{"n":"I c","v":23.139299392700195,"u":"A"},{"n":"P a","v":5462.740234375,"u":"W"},{"n":"P b","v":5624.10302734375,"u":"W"},{"n":"P c","v":5121.3876953125,"u":"W"},{"n":"MP a","v":13727.556640625,"u":"W"},{"n":"MP b","v":14837.0654296875,"u":"W"},{"n":"MP c","v":13078.4951171875,"u":"W"}]',
'{"deviceId":"41d1bebb-51fc-46cc-87f1-7f7bf251d02e","readings":[{"path":"","meaning":"luminosity","value":23.04}],"received":1479907318936}',
'{"deviceId":"f5cb907b-0dc7-43e8-91ab-fae94b4da6da","readings":[{"path":"","meaning":"magneticField","value":{"x":53,"y":13,"z":-95}}],"received":1479907324826}' ]


module.exports = {
    event,
    queue
}