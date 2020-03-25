const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    // 吸底模式，与迷你模式冲突
    fixed: true,
    // 默认是否自动播放
    autoplay: false,
    theme: '#FADFA3',
    loop: 'one',
    order: 'random',
    preload: 'auto',
    // 默认音量
    volume: 0.7,
    // 是否不允许多个播放器同时播放
    mutex: true,
    // 是否默认收起播放列表
    listFolded: true,
    // 播放列表的高度
    listMaxHeight: 90,
    // 使用lrc文件提供歌词，3 表示使用Irc文件，0 表示不显示歌词
    lrcType: 3,
    // 网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: '행복을 찾아서(寻找幸福)',
            artist: 'Leessang / 赵贤雅',
            url: 'http://music.163.com/song/media/outer/url?id=22842399.mp3',
            cover: 'http://p1.music.126.net/2996FlCtcEluFUaFG9Y16A==/857619069689686.jpg',
            lrc: '/dist/music/22842399.lrc',
            theme: '#46718b'
        },
        {
            name: '轻轻的放下',
            artist: '小柯',
            url: 'http://www.ytmp3.cn/down/55422.mp3',
            cover: 'http://p2.music.126.net/b5UY8eG2CwxsU568JH6KdQ==/3244658815024143.jpg',
            lrc: '/dist/music/29771420.lrc',
            theme: '#46718b'
        },
        // {
        //     name: '헤어지지 못하는 여자, 떠나가지 못하는 남자',
        //     artist: 'Leessang / 郑仁',
        //     url: 'http://m10.music.126.net/20190904143222/b2e00879eda4c8d6b95040ded53eff95/ymusic/c539/057c/9dbd/08c7cadeff2c931f2af3d498a5dc38c0.mp3',
        //     // 默认外链链接无效
        //     cover: 'http://p2.music.126.net/dl6j6G3KvH5477D-7P6KVw==/6641050231879939.jpg',
        //     lrc: '/dist/music/22842426.lrc',
        //     theme: '#46718b'
        // },
        {
            name: '나란 놈은 답은 너다 Prologue',
            artist: 'Leessang',
            url: 'http://music.163.com/song/media/outer/url?id=22842409.mp3',
            cover: 'https://p2.music.126.net/LZ7l36qFBK2nBmPVvUA8Fw==/590437744139070.jpg',
            lrc: '/dist/music/22842426.lrc',
            theme: '#46718b'
        },
        // {
        //     name: '리쌍 부르쓰',
        //     artist: 'Leessang',
        //     url: 'http://music.163.com/song/media/outer/url?id=1360898625.mp3',
        //     // 默认外链链接无效
        //     cover: 'https://p2.music.126.net/LZ7l36qFBK2nBmPVvUA8Fw==/590437744139070.jpg',
        //     // lrc: '/dist/music/22842426.lrc',
        //     theme: '#46718b'
        // },
        {
            name: 'Yunomi--インドア系ならトラックメイカー (Fdby Remix)',
            artist: 'Yunomi / nicamoq / Fdby',
            url: 'http://music.163.com/song/media/outer/url?id=425684779.mp3',
            cover: 'https://p2.music.126.net/Ez-_OKKKzKsSXzDY15hwTw==/3394192418636766.jpg',
            lrc: '/dist/music/425684779.lrc',
            theme: '#46718b'
        },
        {
            name: '삐삐',
            artist: 'IU',
            url: 'http://music.163.com/song/media/outer/url?id=1316563427.mp3',
            cover: 'https://p1.music.126.net/gxo54B2ypqq0Y6tmahBnIw==/109951163596240238.jpg',
            lrc: '/dist/music/1316563427.lrc',
            theme: '#46718b'
        },
        // {
        //     name: 'ヤキモチ',
        //     artist: '高橋優',
        //     url: 'http://www.ytmp3.cn/down/73520.mp3',
        //     // 默认外链链接无效
        //     cover: 'https://p1.music.126.net/oPj76RwZ9ChuFoRIhx65xw==/8947825626848871.jpg',
        //     lrc: '/dist/music/28885472.lrc',
        //     theme: '#46718b'
        // },
        {
            name: 'Por Una Cabeza',
            artist: 'Thomas Newman',
            url: 'http://music.163.com/song/media/outer/url?id=2007819.mp3',
            cover: 'https://p1.music.126.net/Qbd2-webBTcERPSSQVB4SQ==/779553754365834.jpg',
            lrc: '/dist/music/22842426.lrc',
            theme: '#46718b'
        }
    ]
});
// 显示/隐藏歌词
// ap.lrc.hide();
ap.lrc.toggle();