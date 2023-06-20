const {Router}= require('express')
const Stream = require('node-rtsp-stream')
const router =Router()

router.get('/',(req,res)=>{
    res.render('index',{
        title:'Robot control',
        isIndex:true,
        videoStart:false
    })
})

router.get('/download',(req,res)=>{
    res.render('download',{
        title:'Download video',
        isDownload:true
    })
})

let stream = null

router.post('/', (req, res)=>{
    if(req.body.video=='true'){
        stream = new Stream({
            name: 'name',
            streamUrl: 'rtsp://admin:@192.168.99.78:554/h264Preview_01_main',
            wsPort: 9999,
            ffmpegOptions: { // options ffmpeg flags
                '-stats': '',
                '-r': 20,
                '-s': '430x240',
                '-b:v': '1000K',
                '-bf': 0,
                '-an': ''
            }
        })
        res.render('index',{
            title:'Robot control',
            isIndex: true,
            videoStart: true
        })
    }
    else{
        stream.stop()
        stream = null

        res.render('index',{
            title:'Robot control',
            isIndex: true,
            videoStart: false
        })  
    }
})




module.exports = router