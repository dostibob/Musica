const songs = [
        {title: "Congratulations (feat. Bilal)",
            artist: "Mac Miller",
            url: "https://www.dropbox.com/scl/fi/09k8946jlc7mrfpzp4j3z/Congratulations-feat.-Bilal.mp3?rlkey=k6u4qifvqr2uegrga46r09lb6&st=e7ne95u3&raw=1"
        },
        {title: "Quiero Repetir (feat. J Balvin)",
            artist: "Ozuna",
            url: "https://www.dropbox.com/scl/fi/e6mbo22bqgsmzebnhk3ti/Ozuna-feat.-J-Balvin-Quiero-Repetir-Audio-Oficial-Odisea.mp3?rlkey=ce51ufjch734xgaq44jveconf&st=pklm7ays&raw=1"
        },
        {title: "Victoria",
            artist: "Lunay & Beéle",
            url: "https://www.dropbox.com/scl/fi/k7u2s8d9bqcdwbfzavhij/Victoria.mp3?rlkey=ry5623wgyddz6sqlyg1dr292d&st=0n0kh6ja&raw=1"
        },
        {title: "Symphony (fear. Zara Larsson)",
            artist: "Clean Bandit",
            url: "https://www.dropbox.com/scl/fi/v8b4538wt66e4sxhmj866/Symphony-feat.-Zara-Larsson.mp3?rlkey=a44xkc2vfs0w2nnvddlors0xa&st=fbcq5vvz&raw=1"
        },
        {title: "ILY",
            artist: "Kapo & Myke Towers",
            url: "https://www.dropbox.com/scl/fi/amd5gcrfjugsi0n74ho4j/ILY.mp3?rlkey=5l6dqzpau6qdgzea68gyp053z&st=eetr1npj&raw=1"
        },
        {title: "My Only Angel",
            artist: "Aerosmith & YUNGBLUD",
            url: "https://www.dropbox.com/scl/fi/4zrll1oimsg6l0mnhyxju/My-Only-Angel.mp3?rlkey=r1e6s09cioexpi0fol048ida7&st=hjsplvp1&raw=1"
        },
        {title: "Latch",
            artist: "Disclosure & Sam Smith ",
            url: "https://www.dropbox.com/scl/fi/qu0d7w66t1v8llt08jp61/Latch.mp3?rlkey=j7pfr1fdaybty9h96zlgqqumb&st=7b84azrd&raw=1"
        },
        {title: "Instarn Crush",
            artist: "Daft Punk & Julian Casa Blancas",
            url: "https://www.dropbox.com/scl/fi/60k5gds6xs7nwe9edjhl0/Instant-Crush-feat.-Julian-Casablancas.mp3?rlkey=3xsnbiqbhl5ab9ivd20kwaahz\&st=4y352ewr\&raw=1"
        },
        {title: "Kiss",
            artist: "Prince",
            url: "https://www.dropbox.com/scl/fi/q52jbs3wvcod7zteudvvg/Kiss.mp3?rlkey=o6eherftvzmiarc5lidcxf1lj\&st=k3wjdhh7\&raw=1"
        },
        {title: "No tiene Sentido",
            artist: "Beéle",
            url: "https://www.dropbox.com/scl/fi/31pxxweajof8c7fckhenv/no-tiene-sentido.mp3?rlkey=p04j3ziz4ii1ko5ls4s7tvq0f\&st=3c6lj6nq\&raw=1"
        },
        {title: "Extrañandote",
            artist: "Zamira & Jay Wheeler",
            url: "https://www.dropbox.com/scl/fi/hl8wa7ec7so7imng8fs9e/Extra-ndote.mp3?rlkey=ub8lja87ms9hyijtgt18ny900\&st=ian9ax73\&raw=1"
        },
        {title: "Perdido en tus ojos (feet. Natti Natasha)",
            artist: "Don omar",
            url: "https://www.dropbox.com/scl/fi/858fccgq9argfcikzbdl2/Perdido-En-Tus-Ojos.mp3?rlkey=2mjaltiykeot5gee711vjo0a0\&st=bkh1b57w\&raw=1"
        },
        {title: "Mi Refe",
            artist: "Beéle",
            url: "https://www.dropbox.com/scl/fi/c5alovjtcxs0gde3qpajl/mi-refe.mp3?rlkey=hkkqe9q3f9s43nv5q0w13ct96\&st=xoba9nws\&raw=1"
        },
        {title: "luther",
            artist: "Kendrick Lamar",
            url: "https://www.dropbox.com/scl/fi/wwulft88hhr8uxu3vui0h/luther.mp3?rlkey=jz6uwdve938jx24bpatdr6d8g\&st=wqewdmwa\&raw=1"
        },
        {title: "Me and Your Mama",
            artist: "Childish Gambino",
            url: "https://www.dropbox.com/scl/fi/0wvnw8qun5supb3otyd5z/Me-and-Your-Mama.mp3?rlkey=ok8uzxuauh6hpoks5udd2mimq\&st=0ti37ywq\&raw=1"
        },
        {title: "Lose Control",
            artist: "Teddy Swims",
            url: "https://www.dropbox.com/scl/fi/u99x7zijrbat31zr3aos8/Teddy-Swims-Lose-Control-Live.mp3?rlkey=w8h38qe4dozxwdfxi9klckeut\&st=w7xcl5qk\&raw=1"
        },
        {title: "365",
            artist: "Katy Perry & Zed",
            url: "https://www.dropbox.com/scl/fi/pcclg69ajcbqvum5dm532/365.mp3?rlkey=ue75jcwdz6yzbqd5nz0eocsc1\&st=j3h6i3ys\&raw=1"
        },
        {title: "Just the Two of Us (feat. Bill Withers)",
            artist: "Grover Washington, Jr.",
            url: "https://www.dropbox.com/scl/fi/yq5rhctyhnvhuc9rvmyfp/Just-the-Two-of-Us.mp3?rlkey=d51142gwmiz08zkdvdln8a8sq\&st=xs4li3y1\&raw=1"
        },
        {title: "Youre My Best Friend",
            artist: "Queen",
            url: "https://www.dropbox.com/scl/fi/ie7z7igw18irti0n9htol/You-re-My-Best-Friend-Remastered-2011.mp3?rlkey=lw78cack5ka09ezaapv6voj5i\&st=23esfp5v\&raw=1"
        },
        {title: "I Dont Want to Miss a Thing ",
            artist: "Aerosmith",
            url: "https://www.dropbox.com/scl/fi/uagvprz1vbcx4ko3cv41t/I-Don-t-Want-to-Miss-a-Thing-From-Armageddon-Soundtrack.mp3?rlkey=jfirxxhja2jsatntvo7ggjk4p\&st=4uujpamf\&raw=1"
        },
        {title: "The Power of Love",
            artist: "Huey Lewis and the News",
            url: "https://www.dropbox.com/scl/fi/9mjgf7ck2dphd0b1z7uh9/The-Power-Of-Love-From-Back-To-The-Future-Soundtrack.mp3?rlkey=tn2k9969ol2vbanzu45l22gkb\&st=y42yc0lj\&raw=1"
        },
        {title: "Love (feat. Zacari)",
            artist: "Kendrick Lamar",
            url: "https://www.dropbox.com/scl/fi/xal4fhzfnqtqczcqre883/LOVE..mp3?rlkey=1g0ce7pur778r7hb7skuop7ei\&st=xnkbl3rs\&raw=1"
        },
        {title: "My Favorite Part (Feat. Ariana Grande)",
            artist: "Mac Miller",
            url: "https://www.dropbox.com/scl/fi/vc8joacso2d5kg18tw6g0/My-Favorite-Part.mp3?rlkey=g9coeca7umr4jdi5kccdycgh6\&st=clc7dzu1\&raw=1"
        },
        {title: "I Dont Know Why",
            artist: "Imagine Dragons",
            url: "https://www.dropbox.com/scl/fi/mrhr9p5of8xvtgmjojgzo/I-Dont-Know-Why.mp3?rlkey=btxyjzdswd1074t795042ehg0\&st=ft8z51sl\&raw=1"
        },
        {title: "El Lado Oscuro",
            artist: "Jarabe de Palo",
            url: "https://www.dropbox.com/scl/fi/bldut8o8k1rwdag61uehq/El-lado-oscuro.mp3?rlkey=5zk2drhq3ei7g1zrl26zju23r&st=kmdvha8h&raw=1"
        },
        {title: "sunflower ",
            artist: "Post Malone & Swae Lee",
            url: "https://www.dropbox.com/scl/fi/yolhwbltm7j5382cheqg1/Sunflower-Spider-Man_-Into-the-Spider-Verse.mp3?rlkey=wt2rkq07ggmuy234z1u1i0y47&st=vapwtzxu&raw=1"
        },
        {title: "Señora flor",
            artist: "Big Sempa",
            url: "https://www.dropbox.com/scl/fi/d742zzfcmf23b13ic33vd/Se-ora-Flor.mp3?rlkey=jhj5i9ir44uynlk77en4y4y88&st=jvy4h14d&raw=1"
        },
        {title: "Fell it ",
            artist: "D4vd",
            url: "https://www.dropbox.com/scl/fi/chdd52zcsg1wxxz0brr68/Feel-It.mp3?rlkey=j59wuvbn3thp6rszlct2p2wud&st=flbt7b8v&raw=1"
        },
        {title: "Falling ",
            artist: "Trevor Daniel",
            url: "https://www.dropbox.com/scl/fi/jc8biz807jvvsy9zgnpun/Falling.mp3?rlkey=s5kjmre2ed7cqgyl5huwlv25s&st=afzju6tv&raw=1"
        },
        {title: "Digital Love",
            artist: "Daft Punk",
            url: "https://www.dropbox.com/scl/fi/qlnkq3wmfo9f2ucnvye2x/Digital-Love.mp3?rlkey=jndxuxg99ophgl09g3ll7gk4i&st=7fkx4709&raw=1"
        },
        {title: "Are You Gonna Be My Girl ",
            artist: "Jet",
            url: "https://www.dropbox.com/scl/fi/79yh9m4mgq124mqxd7cco/Are-You-Gonna-Be-My-Girl.mp3?rlkey=axhjow4zs0u3jwxulpjpjvya7&st=8crx5rta&raw=1"
        },
        {title: "Me Gustas Natural",
            artist: "Eladio Carrion & Rels B",
            url: "https://www.dropbox.com/scl/fi/7tgiu1mjmi6giqpf3yf1u/Me-Gustas-Natural.mp3?rlkey=8yyapjiwpb39gf6shxu92s7ob&st=t4apsmc2&raw=1"
        },
        {title: "Antes de Morirme (Feat. ROSALIA)",
            artist: "C.Tangana",
            url: "https://www.dropbox.com/scl/fi/d6iu1s2snzb1yv8sennbb/Antes-de-Morirme-feat.-ROSAL-A.mp3?rlkey=wu11grdjdnu9tfxwycngqeb0w&st=t6eeevkn&raw=1"
        },
        {title: "Valentine",
            artist: "5 Seconds of Summer",
            url: "https://www.dropbox.com/scl/fi/akezzgs1y20xoz4cen1vz/Valentine-Live.mp3?rlkey=hh9yvspdvspc4crlov4rd9dpg&st=twngho06&raw=1"
        },
        {title: "La güera",
            artist: "Big Sempa & Sabino",
            url: "https://www.dropbox.com/scl/fi/wt7hi5xheodvedpayaevf/La-G-era.mp3?rlkey=wtw3uafez3db4g0qb4ezq5a64&st=3zlpu9gk&raw=1"
        },
        {title: "Por Ti Me Casare ",
            artist: "Eros Ramazzotti",
            url: "https://www.dropbox.com/scl/fi/57cholxkqqh78jvjv4jgk/Por-Ti-Me-Casare.mp3?rlkey=dhng43pop0f1m03uitvcf91jr&st=j1x8m0i1&raw=1"
        },
        {title: "Stupid Love Story",
            artist: "Canserbero & Apache",
            url: "https://www.dropbox.com/scl/fi/3466dbo1p14uhxtp1tmri/Stupid-Love-Story.mp3?rlkey=4b4qk93z1tavunl8r3tkil359&st=gz5edffp&raw=1"
        },
        {title: "Millones",
            artist: "Camilo",
            url: "https://www.dropbox.com/scl/fi/bspuk1zl40sbs00dez9mx/Millones.mp3?rlkey=hrq47a22bnzy1ce7j4uuhvk0y&st=9c085cs6&raw=1"
        },
        {title: "Cose Della Vita",
            artist: "Eros Ramazzotti",
            url: "https://www.dropbox.com/scl/fi/cp5xbm3ybhmzqmw9ps762/Cose-della-vita.mp3?rlkey=dzlw209owpu568smavg3vg8za&st=3lzx4v5c&raw=1"
        },
        {title: "Heres Come the Sun",
            artist: "The Beatles",
            url: "https://www.dropbox.com/scl/fi/zn1ehbtj3buec3qzpvdya/Here-Comes-The-Sun-Remastered-2009.mp3?rlkey=ptlcxauv3oufcyn7letgbu88c&st=ct7yu8tj&raw=1"
        },
        {title: "ALOH ALOH ",
            artist: "Kapo",
            url: "https://www.dropbox.com/scl/fi/dh1e1n9wvixerzcns3lls/ALOH-ALOH.mp3?rlkey=pxs76ki44yqm5zlsvj38vjx92&st=mcdysp7y&raw=1"
        },
        {title: "Nuestro Juramento",
            artist: "Julio Jaramillo",
            url: "https://www.dropbox.com/scl/fi/phhpoktjmgllg6gd5nkrn/Nuestro-Juramento.mp3?rlkey=ttz866zcj187cyqamxwpk1380&st=5wonxz85&raw=1"
        },
        {title: "Nadie Como Tú",
            artist: "Miranda!",
            url: "https://www.dropbox.com/scl/fi/b4vjyg1c8tivgxn2vxbu1/Miranda-Nadie-Como-T-Video-Oficial-NadieComoTu-2.mp3?rlkey=9xew8b5fvh5vfrhiuxxril5yo&st=04j3xt0h&raw=1"
        },
        {title: "Para Tu Amor",
            artist: "Juanes",
            url: "https://www.dropbox.com/scl/fi/2qbctp9goat683iiumis7/Para-Tu-Amor.mp3?rlkey=8ng2t3swz5sp4dy70l4aidwt9&st=gxs3xaaf&raw=1"
        },
        {title: "Diamantes",
            artist: "Carla Morrison",
            url: "https://www.dropbox.com/scl/fi/q9zueuvia0f6i70mr25vd/Diamantes.mp3?rlkey=fr20ipi8hqb09pcwgwla2l4ux&st=n0knltci&raw=1"
        },
        {title: "Fallin In Love",
            artist: "Post Malone",
            url: "https://www.dropbox.com/scl/fi/2rhsmh7377f4umyqyvxes/Fallin-In-Love.mp3?rlkey=7zokvftkrxf39lw4uv7ddjr72&st=qrzvptdp&raw=1"
        },
        {title: "MI DIOSA",
            artist: "CA7RIEL & Paco Amoroso",
            url: "https://www.dropbox.com/scl/fi/u8vxwzbjlhtsvvapt6oa6/MI-DIOSA.mp3?rlkey=e7ininlvj3bynfx5fe70l4dkh&st=yh5a38ku&raw=1"
        },
        {title: "Templo ",
            artist: "Ozuna & Beéle",
            url: "https://www.dropbox.com/scl/fi/dga4gfppm06bnu38o5zmu/Templo.mp3?rlkey=hu3tglffb357m53ul8aja5zb2&st=jb7yez79&raw=1"
        },
        {title: "Fallen",
            artist: "Jaden",
            url: "https://www.dropbox.com/scl/fi/04hn6tch7vfaox4331xaq/Fallen.mp3?rlkey=qmpx9kuwieseqiqe6xlwnl5ig&st=caiqvmrc&raw=1"
        },
        {title: "RUFF",
            artist: "Kapo",
            url: "https://www.dropbox.com/scl/fi/fyq4ivprvkruf932uzjtk/RUFF.mp3?rlkey=s4xmgbppepmpg4rlfbmmrbgxd&st=jcvfa2y6&raw=1"
        },
        {title: "Proximamente...",
            artist: "...",
            url: "..."
        }
    ];

window.songs = songs;