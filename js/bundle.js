! function() {
    "use strict";
    class t {
        constructor() {}
        static init() {
            Laya.ClassUtils.regClass
        }
    }
    t.width = 750, t.height = 1334, t.scaleMode = "showall", t.screenMode = "none", t.alignV = "middle", t.alignH =
        "center", t.startScene = "", t.sceneRoot = "", t.debug = !1, t.stat = !1, t.physicsDebug = !1, t
        .exportSceneToJson = !0, t.init();
    class e {
        static get isLiuHaiScreen() {
            return Laya.stage.height / Laya.stage.width >= 2 || Laya.stage.height / Laya.stage.width <= .5
        }
        static get isIpad() {
            if (e._isIpad) return e._isIpad;
            let t = Math.max(Laya.stage.width, Laya.stage.height),
                i = Math.min(Laya.stage.width, Laya.stage.height);
            return e._isIpad = i / t > .7, e._isIpad && (e._clientScale = 1.535), e._isIpad
        }
        static get clientScale() {
            return e._clientScale
        }
        static getSkinGoldCost(t) {
            return e.Gold_Unlock_Skin[0]
        }
        static goldUnlockSkinList() {
            if (e.GOLD_SKIN_LIST && e.GOLD_SKIN_LIST.length > 0) return e.GOLD_SKIN_LIST;
            for (let t = 0; t < e.COMMON_SKIN_TOTAL_COUNT; t++) {
                let i = e.SKIN_START + t;
                i != e.DEFAULT_SKINID && (i != e.SHARE_SKINID && (e.KONGTOU_SKIN_LIST.indexOf(i) >= 0 || e
                    .VIDEO_SKINID.indexOf(i) >= 0 || e.SIGN_SKIN_LIST.indexOf(i) >= 0 || e.LOTTERY_SKIN_LIST
                    .indexOf(i) >= 0 || e.GOLD_SKIN_LIST.push(i)))
            }
            return e.GOLD_SKIN_LIST
        }
        static skinOrderList() {
            if (e.ORDER_SKIN_LIST && e.ORDER_SKIN_LIST.length > 0) return e.ORDER_SKIN_LIST;
            let t = [];
            t.push(e.DEFAULT_SKINID);
            let i = e.goldUnlockSkinList();
            return t = (t = (t = (t = (t = (t = (t = t.concat(i)).concat(e.LOTTERY_SKIN_LIST)).concat(e
                    .VIDEO_SKINID)).concat(e.SIGN_SKIN_LIST)).concat(e.KONGTOU_SKIN_LIST)).concat([0, 0, 0, 0]))
                .concat(e.TASK_SKIN_LIST), e.ORDER_SKIN_LIST = t, e.ORDER_SKIN_LIST
        }
    }
    e.isDebug = !1, e.URL = "", e.cacheURL = "", e.Local_Gold = "$%_THSS_Gold_%$", e.Local_Level = "$%_THSS_Level_%$", e
        .Local_SkinVideoTimes = "$%_THSS_Skin_Video_Times_%$", e.Local_Yaoshi = "$%_THSS_Yaoshi_%$", e.Local_UseSkinId =
        "$%_THSS_Use_SkinId_%$", e.Local_SkinUnlock = "$%_THSS_Skin_Unlock_%$", e.Local_UseVibrate =
        "$%_THSS_UseVibrate_%$", e.Local_UseSound = "$%_THSS_UseSound_%$", e.Local_SignToday = "$%_THSS_Today_Sign_%$",
        e.Local_SignTimes = "$%_THSS_Times_Sign_%$", e.Local_SeeVideoLotteryTimes =
        "$%_THSS_See_Video_Lottery_Times_%$", e.Local_FirstShare = "$%_THSS_First_Share_%$", e.Local_OpenedCaiDanQiang =
        "$%_THSS_Opened_CaiDanQiang_%$", e.Local_SkillCount = "$%_THSS_Skill_Count_%$", e.Local_FirstLottery =
        "$%_THSS_First_Lottery_%$", e.Local_WrongClickCount = "$%_THSS_Wrong_Click_Count_%$", e.Local_SkinEndTime =
        "$%_THSS_Skin_End_Time%$", e.Local_ShareZanCount = "$%_THSS_Share_Zan_Count_%$", e.Local_DrawPoints =
        "$%_THSS_Draw_Points_%$", e.Local_TempUseSkinId = "$%_THSS_Temp_Use_SkinId_%$", e.Local_AIFaceUnlock =
        "$%_THSS_AI_Face_Unlock_%$", e.Local_UseAIFaceIndex = "$%_THSS_Use_AI_Face_Index_%$", e.Local_ShowQIXIUI =
        "$%_THSS_Show_QI_XI_UI_%$", e.Local_Buchang1 = "$%_THSS_Buchang_1_%$", e.Local_Buchang2 =
        "$%_THSS_Buchang_2_%$", e.Local_BUCHANGUI = "$%_THSS_BUCHANGUI_%$", e.Local_StarCoin = "$%_THSS_Star_Coin_%$", e
        .Local_FishingMesh = "$%_THSS_Fishing_Mesh_%$", e.Local_FishingTili = "$%_THSS_Fishing_Tili_%$", e
        .Local_FishingRecoverTime = "$%_THSS_Fishing_Recover_Time_%$", e.Local_FishingYugan =
        "$%_THSS_Fishing_Yugan_%$", e.Local_UseYuganIndex = "$%_THSS_Use_Yugan_Index_%$", e.Local_CaidanTips =
        "$%_THSS_Caidan_Tips_%$", e.Local_ExchageCode = "$%_THSS_Exchage_Code_%$", e.LevelConfig =
        "res/config/levelConfig.json", e.OfflineConfig = "res/config/offlineconfig.json", e.OtherConfig =
        "res/config/otherconfig.json", e.SkinConfig = "res/config/skinconfig.json", e.FGUI_URL_LOADING_NAME = "loading",
        e.FGUI_URL_LOADING = "res/fgui/loading", e.FGUI_URL_TXT_LOADING = "res/fgui/loading.txt", e
        .FGUI_URL_LOADING_ATLAS0 = "res/fgui/loading_atlas0.png", e.FGUI_URL_PACKAGE_MAIN_NAME1 = "Package1", e
        .FGUI_URL_PACKAGE_MAIN1 = "res/fgui/Package1", e.FGUI_URL_MAIN_TXT1 = "res/fgui/Package1.txt", e
        .FGUI_PACKAGE1_ATLAS0 = "res/fgui/Package1_atlas0.png", e.FGUI_PACKAGE1_ATLAS1 =
        "res/fgui/Package1_atlas0_1.png", e.FGUI_PACKAGE1_ATLAS2 = "res/fgui/Package1_atlas0_2.png", e
        .FGUI_PACKAGE1_ATLAS3 = "res/fgui/Package1_atlas0_3.png", e.FGUI_URL_PACKAGE_MAIN_NAME2 = "Package2", e
        .FGUI_URL_PACKAGE_MAIN2 = "fgui/Package2", e.FGUI_URL_MAIN_TXT2 = "fgui/Package2.txt", e.FGUI_PACKAGE2_ATLAS0 =
        "fgui/Package2_atlas0.png", e.FGUI_DEBUG_NAME = "Debug", e.FGUI_URL_DEBUG = "res/fgui/Debug", e.TOTAL_LEVEL =
        35, e.SCENE_LEVEL_LIST = [0, 5, 10, 15], e.SKIN_SHIYONG_TIME = 72e5, e.HIT_YUGANG_SKIN_LIST = [1017, 1019,
        1020], e.BLUE_ARROW_SKIN = 1011, e.BLUE_BINGSHUANG_SKIN = 1e3, e.BLUE_HULUWA_SKIN = 1016, e.BLUE_ZISE_HULUWA =
        991, e.BULLET_DAODAN_SKIN = 1006, e.BULLET_GOULIANG = 989, e.BULLET_WANGGUANG = 988, e.SKIN_START = 988, e
        .DEFAULT_SKINID = 1001, e.VIDEO_SKINID = [1012, 1020], e.SHARE_SKINID = 1014, e.SIGN_SKIN_LIST = [1017, 1005,
            1004, 1015
        ], e.LOTTERY_SKIN_LIST = [1019, 1016, 1011, 1007], e.KONGTOU_SKIN_LIST = [e.BLUE_BINGSHUANG_SKIN, 999, 998, 997,
            996, 995, 994, 993, 992, 991, 990, 989, 988
        ], e.TASK_MIFENG = 1021, e.TASK_DAHUANGYU = 1022, e.TASK_HUAJI = 1023, e.TASK_QIXINGJIAN = 1024, e
        .TASK_QIUBITE = 1025, e.TASK_RULAI = 1026, e.TASK_FENGHUANG = 1027, e.TASK_LONGXIA = 1028, e.TASK_SHOULIJIAN =
        1029, e.TASK_RANSHAOFENGCHAO = 1030, e.TASK_RANSHAOWONIUKE = 1031, e.TASK_XUESEQISHAJIAN = 1032, e
        .TASK_TUHAOJINGBI = 1033, e.TASK_DONGFENGKUAIDI = 1034, e.TASK_FENGHUANG_BING = 1035, e.TASK_FENGHUANG_LEI =
        1036, e.TASK_FENGHUANG_AN = 1037, e.TASK_FENGHUANG_FENG = 1038, e.TASK_YOULING = 1039, e.TASK_QIQIAOZHEN = 1040,
        e.TASK_DANSHENGGOU = 1041, e.TASK_SHIT = 1045, e.TASK_LEISHENGCHUI = 1042, e.TASK_BINGFAZHANG = 1043, e
        .TASK_GUITAR = 1044, e.TASK_SWORDGOURD = 1046, e.TASK_SHOUCANGZHUANSHU = e.TASK_DONGFENGKUAIDI, e
        .WUCAI_FENGHUANG = 2e3, e.enemyHight = 1.7, e.TASK_SKIN_LIST = [e.TASK_MIFENG, e.TASK_DAHUANGYU, e.TASK_HUAJI, e
            .TASK_QIXINGJIAN, e.TASK_QIUBITE, e.TASK_RULAI, e.TASK_LONGXIA, e.TASK_SHOULIJIAN, e.TASK_RANSHAOFENGCHAO, e
            .TASK_RANSHAOWONIUKE, e.TASK_XUESEQISHAJIAN, e.TASK_TUHAOJINGBI, e.TASK_DONGFENGKUAIDI, e.TASK_FENGHUANG, e
            .TASK_FENGHUANG_BING, e.TASK_FENGHUANG_LEI, e.TASK_FENGHUANG_AN, e.TASK_FENGHUANG_FENG, e.TASK_YOULING, e
            .TASK_QIQIAOZHEN, e.TASK_DANSHENGGOU, e.TASK_LEISHENGCHUI, e.TASK_BINGFAZHANG, e.TASK_GUITAR
        ], e.FENGHUANG_SKIN_LIST = [e.TASK_FENGHUANG, e.TASK_FENGHUANG_BING, e.TASK_FENGHUANG_LEI, e.TASK_FENGHUANG_AN,
            e.TASK_FENGHUANG_FENG, e.WUCAI_FENGHUANG
        ], e.CAIDAN_VEDIO_TIMES = {
            1021: 2,
            1022: 2,
            1023: 2,
            1024: 2,
            1025: 2,
            1026: 2,
            1027: 2,
            1028: 2,
            1029: 2,
            1030: 2,
            1031: 2,
            1032: 2,
            1033: 2,
            1034: 2,
            1035: 2,
            1036: 2,
            1037: 2,
            1038: 2,
            1039: 2,
            1040: 2,
            1041: 2,
            1042: 2,
            1043: 2,
            1044: 2,
            2000: 3
        }, e.GOLD_SKIN_LIST = [], e.ORDER_SKIN_LIST = [], e.LIMITED_SKIN_VIDEO_TIMES = 1, e.COMMON_SKIN_TOTAL_COUNT =
        31, e.SEE_VIDEO_ADD_GOLD = 200, e.Gold_Unlock_Skin = [500], e.TASK_RANGE_LIST = [e.TASK_LEISHENGCHUI, e
            .TASK_BINGFAZHANG, e.TASK_GUITAR
        ], e._clientScale = 1;
    class i {
        constructor() {}
        static get Ins() {
            return this._ins || (this._ins = new i), this._ins
        }
        get platformObj() {
            let t = null;
            return window.tt ? t = window.tt : window.qg ? t = window.qg : window.wx && (t = window.wx), t
        }
        isPlatform(t) {
            return !("tt" != t || !window.tt) || (!("wx" != t || !window.wx) || (!("qq" != t || !window.qq) || !(
                "qg" != t || !window.qg)))
        }
    }
    i.WX = "wx", i.TT = "tt", i.QG = "qg";
    class s {
        constructor() {
            this.sounds = {}
        }
        static get instance() {
            return this._instance || (this._instance = new s), this._instance
        }
        playGameSound(t, e = 1, s = 0) {
            var a = null;
            if (n.Instance.useSound)
                if (i.Ins.isPlatform(i.WX) || i.Ins.isPlatform(i.TT)) {
                    if (this.sounds[t] && !e) a = this.sounds[t];
                    else {
                        (a = i.Ins.platformObj.createInnerAudioContext()).src = t, a.volume = 1, a.loop = 0 == e,
                            e || (this.sounds[t] = a)
                    }
                    a && (a.startTime = s, a.play())
                } else Laya.SoundManager.playSound(t, e)
        }
        stopSound(t) {
            i.Ins.isPlatform(i.WX) || i.Ins.isPlatform(i.TT) ? this.sounds[t] && this.sounds[t].stop() : Laya
                .SoundManager.stopSound(t)
        }
        playGameMusic(t, e = 0) {
            if (n.Instance.useSound && (t && (this._currentBg = t), this._currentBg))
                if (i.Ins.isPlatform(i.WX) || i.Ins.isPlatform(i.TT)) {
                    if (!this._musicAudio) {
                        let t = i.Ins.platformObj;
                        this._musicAudio = t.createInnerAudioContext()
                    }
                    this._musicAudio && (this._musicAudio.src = t, this._musicAudio.volume = 1, this._musicAudio
                        .loop = 0 == e, this._musicAudio.play())
                } else Laya.SoundManager.musicVolume = 1, Laya.SoundManager.playMusic(this._currentBg, e)
        }
        stopMusic() {
            i.Ins.isPlatform(i.WX) || i.Ins.isPlatform(i.TT) ? (this._currentBg = null, this._musicAudio && (this
                ._musicAudio.stop(), this._musicAudio = null)) : Laya.SoundManager.stopMusic()
        }
        vibrate(t = !1) {}
    }
    class n {
        constructor() {
            this.useSound = !0, this.useVibrate = !0
        }
        static get Instance() {
            return this._instance || (this._instance = new n), this._instance
        }
        soundFormatURL(t) {
            return t = "res/sound/" + t + ".mp3"
        }
        playGameBgm(t) {
            let e = "bgm";
            t && (e = "bgm_piano"), s.instance.playGameMusic(this.soundFormatURL(e))
        }
        playerFenghuang() {
            this.play("fenghuang", 1, 1)
        }
        playkill(t) {
            t = t > 7 ? 7 : t, this.play("kill" + t, 1, 1)
        }
        playWohuo() {
            this.play("wohuo", 1, 1)
        }
        playeOpenBaoXiang() {
            this.play("openBaoxiang", 1, 1)
        }
        playeDie() {
            Laya.timer.once(200, this, () => {
                this.play("die", 1, 1)
            })
        }
        playHit() {
            Math.random() > .5 ? this.play("hit1", 1, 1) : this.play("hit2", 1, 1)
        }
        playeBomb() {
            this.play("bomb", 1, 1)
        }
        playShoot() {
            this.play("shoot", 1, 1)
        }
        playSkill() {
            this.play("skill", 1, 1)
        }
        playJLS() {
            this.play("feijidrop", 1, 1)
        }
        playWin() {
            this.play("win", 1, 1)
        }
        playGold() {
            this.play("gold", 1, 1)
        }
        playFail() {
            this.play("fail", 1, 1)
        }
        playButton() {
            this.play("Button", 1, 1)
        }
        playrRevive() {
            this.play("revive", 1, 1)
        }
        play_PT_Rward() {
            this.play("putong_rward", 1, 1)
        }
        play_CC_Rward() {
            this.play("chuansuo", 1, 1)
        }
        playLottery() {
            this.play("dazhuangpan", 1, 1)
        }
        stopMusic() {
            s.instance.stopMusic()
        }
        pauseMusic() {
            s.instance.stopMusic()
        }
        playClickBtn() {}
        closeSound() {
            this.play("")
        }
        play(t, e = 1, i = 1) {
            s.instance.playGameSound(this.soundFormatURL(t), e, 0)
        }
        stop(t) {
            s.instance.stopSound(this.soundFormatURL(t))
        }
        vibrate(t = !0) {
            s.instance.vibrate(t)
        }
        playLightning() {
            this.play("lightning", 1, 1)
        }
        playFreeze() {
            this.play("freeze", 1, 1)
        }
        playBombIce() {
            this.play("bombIce", 1, 1)
        }
        playPiano() {
            this.play("painoKill", 1, 1)
        }
    }
    class a {}
    a.EVENT_SCENE_LOAD_COMPLETE = "EVENT_SCENE_LOAD_COMPLETE", a.EVENT_UPDATE_GOLD = "EVENT_UPDATE_GOLD", a
        .EVENT_UPDATE_DIAMOND = "EVENT_UPDATE_DIAMOND", a.EVENT_UPDATE_LEVEL = "EVENT_UPDATE_LEVEL", a
        .EVENT_UPDATE_UNLOCKSIN = "EVENT_UPDATE_UNLOCKSIN", a.EVENT_UPDATE_SEEVIDEO = "EVENT_UPDATE_SEEVIDEO", a
        .EVENT_UPDATE_YAOSHI = "EVENT_UPDATE_YAOSHI", a.EVENT_UPDATE_SIGNBTN = "EVENT_UPDATE_SIGNBTN", a
        .EVENT_UPDATE_BULLET_COUNT = "EVENT_UPDATE_BULLET_COUNT", a.EVENT_UPDATE_ENEMY_COUNT =
        "EVENT_UPDATE_ENEMY_COUNT", a.EVENT_PLAYER_DIE = "EVENT_PLAYER_DIE", a.EVENT_PLAYER_REVIVE =
        "EVENT_PLAYER_REVIVE", a.EVENT_PLAYER_START_FIGHT = "EVENT_PLAYER_START_FIGHT", a.EVENT_PLAYER_WIN =
        "EVENT_PLAYER_WIN", a.GAME_START = "EVENT_GAME_START", a.PLAYER_COMPLET = "PLAYER_COMPLET", a
        .LOAD_PLAYER_COMPLET = "LOAD_PLAYER_COMPLET", a.LOAD_ENEMY_COMPLET = "LOAD_ENEMY_COMPLET", a.FINISH_NEW_HAND =
        "FINISH_NEW_HAND", a.ADD_NEW_BULLET = "ADD_NEW_BULLET", a.CHANGE_BULLET = "CHANGE_BULLET", a
        .REFRESH_CAIDAN_ITEM = "REFRESH_CAIDAN_ITEM", a.CAIDAN_UNLOCK_FINISH = "CAIDAN_UNLOCK_FINISH", a
        .OPENED_CAIDANQIANG = "OPENED_CAIDANQIANG", a.GET_CAIDAN = "OPENED_CAIDANQIANG", a.GO_ON_GAME = "GO_ON_GAME", a
        .PAUSE_GAME = "PAUSE_GAME", a.BULLET_JIASHU = "BULLET_JIASHU", a.USE_SKILL = "USE_SKILL", a
        .LOAD_QIULONG_FINISH = "LOAD_QIULONG_FINISH", a.GAME_OVER = "GAME_OVER", a.SHOW_CAIDAN_MODEL =
        "SHOW_CAIDAN_MODEL", a.START_SKIN_SHIYONG = "START_SKIN_SHIYONG", a.REFRESH_SKIN = "EVENT_REFRESH_SKIN", a
        .DESTROY_BULLET = "DESTROY_BULLET", a.SCENE_OPEN_FOG = "SCENE_OPEN_FOG", a.SCENE_INIT_COMPLET =
        "SCENE_INIT_COMPLET", a.UNLOCK_WUCAIFENGHUANG = "UNLOCK_WUCAIFENGHUANG", a.ZIP_BULLET_SUCCESS =
        "ZIP_BULLET_SUCCESS", a.CLEAR_DRAW = "CLEAR_DRAW", a.USE_AIFACE = "USE_AIFACE", a.CHANGE_GIRL_FACE =
        "CHANGE_GIRL_FACE", a.EVENT_UPDATE_STARCOIN = "EVENT_UPDATE_STARCOIN", a.EVENT_UPDATE_FISHTILI =
        "EVENT_UPDATE_FISHTILI", a.EVENT_START_FISHING = "EVENT_START_FISHING", a.EVENT_START_SHOUGAN =
        "EVENT_START_SHOUGAN", a.EVENT_FISHING_FAIL = "EVENT_FISHING_FAIL", a.EVENT_FISHING_SHOUGAN =
        "EVENT_FISHING_SHOUGAN", a.SET_CAIDANQIANG_MODUEL_POS = "SET_CAIDANQIANG_MODUEL_POS", a.SECKILL_BOSS =
        "SECKILL_BOSS";
    class o {
        constructor() {
            this._frames = 0, this._bulletData = [], this._fhData = [], this._enemyData = [], this._bombData = [],
                this._otherData = [], this._deads = [], this._actionData = [], this._isBoss = !1, this._maxHigth =
                0, this._usedSkill = !1, this._haveJLS = !1
        }
        static get Instance() {
            return null == o._ins && (o._ins = new o), o._ins
        }
        set enemyInfo(t) {
            this._enemyInfo = t
        }
        get enemyInfo() {
            return this._enemyInfo
        }
        get isStartFighting() {
            return this._isStartFighting
        }
        set isStartFighting(t) {
            t && (this._frames = 0, this._bulletData = [], this._fhData = [], this._enemyData = [], this
                ._bombData = [], this._otherData = [], this._deads = [], this._actionData = [], this._isBoss = !
                1, this._maxHigth = 0, this._usedSkill = !1, this._haveJLS = !1), this._isStartFighting = t
        }
        set frames(t) {
            this._frames = t
        }
        get frames() {
            return this._frames
        }
        set bulletData(t) {
            this._bulletData = t
        }
        get bulletData() {
            return this._bulletData
        }
        set fhData(t) {
            this._fhData = t
        }
        get fhData() {
            return this._fhData
        }
        set enemyData(t) {
            this._enemyData = t
        }
        get enemyData() {
            return this._enemyData
        }
        set bombData(t) {
            this._bombData = t
        }
        get bombData() {
            return this._bombData
        }
        set otherData(t) {
            this._otherData = t
        }
        get otherData() {
            return this._otherData
        }
        set bulletCount(t) {
            this._bulletCount = t
        }
        get bulletCount() {
            return this._bulletCount
        }
        set bulletMaxCount(t) {
            this._bulletMaxCount = t
        }
        get bulletMaxCount() {
            return this._bulletMaxCount
        }
        set deads(t) {
            this._deads = t
        }
        get deads() {
            return this._deads
        }
        set isBoss(t) {
            this._isBoss = t
        }
        get isBoss() {
            return this._isBoss
        }
        set actionData(t) {
            this._actionData = t
        }
        get actionData() {
            return this._actionData
        }
        set maxHight(t) {
            this._maxHigth = t
        }
        get maxHight() {
            return this._maxHigth
        }
        set uesdSkill(t) {
            this._usedSkill = t
        }
        get uesdSkill() {
            return this._usedSkill
        }
        set haveJLS(t) {
            this._haveJLS = t
        }
        get haveJLS() {
            return this._haveJLS
        }
    }
    class h extends Laya.Scene {
        constructor() {
            super(), this.firstOpen = !0
        }
        initUI() {}
        findNode(t, e) {
            for (var i = e.split("/"), s = 0; s < i.length; s++) {
                let e = t.getChild(i[s]);
                if (null == e) return console.log("findNode: Not found", i[s]), null;
                t = e.asCom
            }
            return t
        }
        childPath(t) {
            return this.findNode(this.contentPane, t)
        }
        child(t) {
            return this.contentPane.getChild(t)
        }
        childAt(t) {
            return this.contentPane.getChildAt(t)
        }
        firstOpenUI() {
            this.firstOpen = !1
        }
        show(t) {
            this.contentPane.visible = !0, this.firstOpen && this.firstOpenUI(), t && t.showBanner ? this
                .openBanner() : t && t.showMoreGameBanner ? this.showMoreGameBanner() : (Ht.Ins.hideBanner(), Ht
                    .Ins.hideMoreGameBanner())
        }
        openBanner() {
            window.adsMgr && window.adsMgr.showBanner(), this.contentPane.visible && (Gt.Instance.getUI(nt
                .Game) && Gt.Instance.getUI(nt.Game).contentPane.visible || (i.Ins.isPlatform(i.WX) || i.Ins
                    .isPlatform(i.TT)) && Ht.Ins.showBanner())
        }
        showMoreGameBanner() {
            this.contentPane.visible && (Gt.Instance.getUI(nt.Game) && Gt.Instance.getUI(nt.Game).contentPane
                .visible || (i.Ins.isPlatform(i.WX) || i.Ins.isPlatform(i.TT)) && Ht.Ins
                .showMoreGameBanner())
        }
        hide() {
            window.adsMgr && window.adsMgr.hideBanner(), this.contentPane.visible = !1
        }
    }
    class r {
        constructor() {}
        static isNumber(t) {
            return !(!/^\d+(\.\d+)?$/.test(t += "") && !
                /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/.test(t))
        }
        static limit(t, e) {
            t = Math.min(t, e);
            var i = (e = Math.max(t, e)) - t;
            return t + Math.random() * i
        }
        static nearPoint(t, e = .5, i) {
            return i.x >= t.x - e && i.y >= t.y - e && i.z >= t.z - e && i.x <= t.x + e && i.y <= t.y + e && i.z <=
                t.z + e
        }
        static randomArray(t) {
            return t[Math.floor(Math.random() * t.length)]
        }
        static shuffleArray(t) {
            return t.sort(() => .5 - Math.random()), t
        }
        static clamp(t, e, i) {
            return Math.max(e, Math.min(i, t))
        }
        static lotteryByWeight(t) {
            if (!t || 0 == t.length) return 0;
            let e = 0;
            for (let i = 0; i < t.length; i++) e += parseInt(t[i]);
            let i = t.length,
                s = Math.random() * e;
            t = t.sort(function(t, e) {
                return t - e
            });
            let n = [],
                a = 0;
            for (let e = 0; e < t.length; e++) a += t[e], n.push(a);
            let o = n.concat(s).sort(function(t, e) {
                return t - e
            });
            console.log("After the new weight array with weight random numbers is sorted in ascending order:", o);
            let h = o.indexOf(s);
            return h = Math.min(h, i - 1)
        }
    }
    class l {
        constructor() {}
        static get Instance() {
            return null == l._ins && (l._ins = new l), l._ins
        }
        actionSignUI(t = !0) {
            if (Pt.Instance.signTimes >= 7) return;
            let e = Pt.Instance.signToday;
            Kt.isToday(e) || t && Pt.Instance.isFirstEnterGame || Gt.Instance.showUI(nt.Sign)
        }
        conditionLottery() {
            let t = !0,
                i = e.LOTTERY_SKIN_LIST;
            for (let e = 0; e < i.length; e++)
                if (!Pt.Instance.isSkinUnlock(i[e])) {
                    t = !1;
                    break
                } return !t
        }
        conditionVidioUnlockSkin() {
            let t = e.VIDEO_SKINID,
                i = [];
            for (let e = 0; e < t.length; e++) {
                let s = t[e];
                Pt.Instance.isSkinUnlock(s) || i.push({
                    skinId: s,
                    index: e
                })
            }
            if (0 == i.length) return null;
            let s = r.randomArray(i);
            return {
                skinId: s.skinId,
                contorlIndex: s.index
            }
        }
        actionUI() {
            let t = Pt.Instance.level;
            if (2 == t) this.actionSignUI(!1);
            else if (3 == t);
            else if (4 == t) this.conditionLottery() && Gt.Instance.showUI(nt.Lottery);
            else if (5 == t) this.conditionVidioUnlockSkin() && Gt.Instance.showUI(nt.VidioUnlockSkin);
            else {
                let t = [];
                if (this.conditionVidioUnlockSkin() && t.push(nt.VidioUnlockSkin), t.length > 0) {
                    let e = r.randomArray(t),
                        i = null;
                    Gt.Instance.showUI(e, i)
                }
            }
        }
    }
    class c {
        constructor() {
            this._QG = window.qg, this._QG && (this.oldCacheResList = ["THSS_RES", "THSS_RES_1", "THSS_RES_2",
                "THSS_RES_170"
            ], this.cacheURL = this._QG.env.USER_DATA_PATH + "/THSS_RES_172/")
        }
        static get Instance() {
            return null == c._ins && (c._ins = new c), c._ins
        }
        unzipCache(t, e) {
            var i = this.cacheURL,
                s = e,
                n = this._QG.getFileSystemManager();
            console.log("unzipCache The cache directory has been created", i);
            try {
                n.accessSync(i) && n.mkdirSync(i)
            } catch (t) {
                console.log(t), n.mkdirSync(i)
            }
            console.log("unzipCache Material package has started to download", i, s, e), n.unzip({
                zipFilePath: s,
                targetPath: i,
                success: function() {
                    console.log("unzipCache The resource pack is decompressed"), t && t(!0), t = null
                },
                fail: function(e) {
                    console.log("unzipCache Failed to decompress resource pack", e), n.unlinkSync(s), t && t(!1), t = null
                },
                complete: function(t) {
                    console.log("complete Material package download", t)
                }
            })
        }
        downloadCache(t, e) {
            var i = this,
                s = this.cacheURL + e,
                n = this.cacheURL;
            console.log("");
            var a = this._QG.getFileSystemManager();
            console.log("downloadCache Temporary directory has been created", n);
            try {
                a.accessSync(n) && a.mkdirSync(n)
            } catch (t) {
                console.log(t), a.mkdirSync(n)
            }
            console.log("downloadCache Material package has started to download", "", s, e), this._QG.downloadFile({
                url: "",
                filePath: s,
                success: function(e) {
                    200 === e.statusCode && (console.log("success The material package is downloaded", e), i.unzipCache(t, e
                        .filePath))
                },
                fail: function(e) {
                    console.log("fail Material package download canceled", e), t && t(!1), t = null
                },
                complete: function(t) {
                    console.log("complete Material package download", t)
                }
            })
        }
        checkCache(t, e) {
            let i = this._QG.getFileSystemManager();
            if (this.oldCacheResList && this.oldCacheResList.length > 0)
                for (let t = 0; t < this.oldCacheResList.length; t++) {
                    let e = this._QG.env.USER_DATA_PATH + "/" + this.oldCacheResList[t] + "/";
                    try {
                        i.accessSync(e) || (console.log("Start Deleting Old Material Packs" + t), this.clearDir(e), i.rmdirSync(e), console
                            .log("Delete The Old Resource Pack Successfully" + t))
                    } catch (e) {
                        console.log("Old Material Package Does Not Exist" + t)
                    }
                }
            let s = this,
                n = this.cacheURL + e;
            console.log("------------checkCache--------------", n), i.access({
                path: n,
                success: function(i) {
                    console.log("Material Package Has Been Downloaded", e, i), t && t(), t = null
                },
                fail: function(i) {
                    console.log("Material Package Does Not Exist", e, i), s.downloadCache(t, e)
                }
            })
        }
        clearDir(t) {
            let e = t,
                i = this._QG.getFileSystemManager(),
                s = i.readdirSync(e);
            for (let t = 0; t < s.length; t++) {
                let n = s[t];
                try {
                    i.accessSync(e + "/" + n), this.clearDir(e + "/" + n), i.rmdirSync(e + "/" + n)
                } catch (t) {
                    i.unlinkSync(e + "/" + n)
                }
            }
        }
    }
    class _ {
        static show(t, e = NaN, i = NaN) {
            if (!_.tipsView) {
                var s = fgui.UIPackage.createObjectFromURL(_.URL);
                s && (_.tipsView = s, _.tipsView.touchable = !1, _.tipsView.displayObject.zOrder = 99999)
            }
            _.tipsView && (_.tipsView.getChild("title").text = t, fgui.GRoot.inst.addChild(_.tipsView), _.tipsView
                .x = Laya.stage.width / 2, _.tipsView.y = 500, isNaN(i) || (_.tipsView.y = i), isNaN(e) || (_
                    .tipsView.x = e), _.tipsView.getTransition("show").stop(), _.tipsView.getTransition("show")
                .play(Laya.Handler.create(this, () => {
                    _.tipsView.removeFromParent()
                })), console.log("tip: " + t), Laya.Tween.to(_.tipsView, {
                    y: _.tipsView.y - 100
                }, 500), Laya.timer.once(2e3, fgui.GRoot.inst, fgui.GRoot.inst.removeChild, [_.tipsView]))
        }
    }
    _.URL = "ui://lgmuflyq9jyaei";
    class d extends fgui.GComponent {
        constructor(t) {
            super(), this._uiRoot = t, this._list = this._uiRoot.getChild("n1").asList, this._list
                .itemRenderer = Laya.Handler.create(this, this.renderListItem, null, !1), this._list.on(fgui
                    .Events.CLICK_ITEM, this, this.onClickItem), this.refreshData()
        }
        refreshData() {
            let i = [{
                name: "Shut Down",
                callback: t => {
                    t.remove()
                }
            }, {
                name: "Fps Panel",
                callback: e => {
                    e.remove(), t.stat = !t.stat, t.stat ? Laya.Stat.show() : Laya.Stat.hide()
                }
            }, {
                name: "Clear Archive",
                callback: t => {
                    t.remove(), Ht.Ins.saveUserGameData({}, !0, !0), Laya.LocalStorage.clear()
                }
            }, {
                name: e.isDebug ? "Do Not Look At The Advertising Model" : "Look At The Advertising Model",
                callback: t => {
                    t.remove(), e.isDebug = !e.isDebug
                }
            }, {
                name: "Unlock All Airdrop Skins",
                callback: t => {
                    let i = e.KONGTOU_SKIN_LIST;
                    for (let t = 0; t < i.length; t++) Pt.Instance.setSkinUnlock(i[t]);
                    t.remove()
                }
            }, {
                name: "Unlock All Phoenix Skins",
                callback: t => {
                    let i = e.FENGHUANG_SKIN_LIST;
                    for (let t = 0; t < i.length; t++) Pt.Instance.setSkinUnlock(i[t]);
                    t.remove()
                }
            }, {
                name: "Unlock All Egg Skins",
                callback: t => {
                    let i = e.TASK_SKIN_LIST;
                    for (let t = 0; t < i.length; t++) Pt.Instance.setSkinUnlock(i[t]);
                    t.remove()
                }
            }, {
                name: "Unlock All Normal Skins",
                callback: t => {
                    for (let t = e.SKIN_START; t < e.TASK_MIFENG; t++) Pt.Instance.setSkinUnlock(t);
                    t.remove()
                }
            }];
            this.showData(i)
        }
        showData(t) {
            this._listData = t, this._list.numItems = t.length
        }
        renderListItem(t, e) {
            let i = this._listData[t];
            i && (e.asCom.getChild("n2").asTextField.text = i.name), e.data = t
        }
        onClickItem(t) {
            let e = t.data,
                i = this._listData[e];
            i && i.callback && i.callback(this, i)
        }
        remove() {
            this._uiRoot.parent && this._uiRoot.parent.removeChild(this._uiRoot), this.dispose()
        }
    }
    class g extends Laya.Script3D {
        constructor() {
            super(...arguments), this.speed = .008, this._isMove = !0
        }
        onAwake() {
            this._transform = this.owner.transform
        }
        setPivot(t, e) {
            e || (this.speed = -this.speed), this._pivot = t, this._closewise = e;
            var i = this._transform.position.x - t.x,
                s = this._transform.position.z - t.z;
            this._radius = Math.sqrt(i * i + s * s), this._rad = Math.atan2(s, i), this.updateRotation()
        }
        onUpdate() {
            if (this._isMove) {
                this._rad += this.speed;
                var t = this._transform.position;
                t.x = this._radius * Math.cos(this._rad) + this._pivot.x, t.z = this._radius * Math.sin(this
                    ._rad) + this._pivot.z, this._transform.position = t, this.updateRotation()
            }
        }
        updateRotation() {
            this._closewise ? this._transform.localRotationEulerY = 180 * -this._rad / Math.PI : this._transform
                .localRotationEulerY = 180 - 180 * this._rad / Math.PI
        }
        stopMove() {
            this._isMove = !1
        }
        stopAni() {
            this.owner.getComponent(Laya.Animator).speed = 0
        }
        stop() {
            this.stopMove(), this.stopAni()
        }
    }
    class u extends g {
        onAwake() {
            super.onAwake(), this.speed *= 2
        }
        stopMove() {
            super.stopMove()
        }
        stopAni() {
            super.stopAni()
        }
        stop() {
            super.stop()
        }
    }
    class I extends h {
        constructor() {
            super(), this._items = []
        }
        initUI() {
            super.initUI(), this._btnClose = this.contentPane.getChild("n6"), this._btnVideo = this.contentPane
                .getChild("n7"), this._ain = this.contentPane.getTransition("t0");
            for (let t = 0; t < 3; t++) {
                let e = this.contentPane.getChild("n" + (3 + t)).asCom;
                e.onClick(this, this.onTouchItem, [e]), this._items.push(e)
            }
            this._btnClose.onClick(this, this.onTouch, [this._btnClose]), this._btnVideo.onClick(this, this.onTouch,
                [this._btnVideo])
        }
        show(t) {
            super.show({
                showBanner: !0
            }), I.openSkinList = [], I.notOpenSkinList = [], this._ain.stop(), this._ain.play(null, 1);
            let e = Pt.Instance.notUnlockSkinList();
            if (e && e.length > 0) {
                let t = r.shuffleArray(e);
                for (let e = 0; e < this._items.length; e++) {
                    let i = this._items[e];
                    i.enabled = !0, i.visible = !1, e <= t.length - 1 && (i.visible = !0, i.skinId = t[e], I
                        .notOpenSkinList.push(i.skinId))
                }
            }
            this._btnClose.visible = !1, Laya.timer.once(Ht.Ins.addelay, this, () => {
                this._btnClose.visible = !0
            })
        }
        onTouchItem(t) {
            this.seeAdVidio(t)
        }
        seeAdVidio(t) {
            var e = this;
            window.adsMgr && window.adsMgr.showVideoAd({
                success: function() {
                    e.getVidioAward(!0, t)
                },
                fail: function() {}
            })
        }
        getVidioAward(t, i) {
            t && (i.enabled = !1, I.openSkinList.push(i.skinId), Pt.Instance.setSkinEndTime(i.skinId, Kt.now + e
                .SKIN_SHIYONG_TIME), Gt.Instance.showUI(nt.CaiDanUnlock, {
                skinId: i.skinId,
                type: 2
            }))
        }
        videoOpenItem() {
            let t = null;
            for (let e = 0; e < this._items.length; e++) {
                let i = this._items[e];
                if (i.visible && i.enabled) {
                    t = i;
                    break
                }
            }
            t ? this.onTouchItem(t) : _.show("All air supplies opened")
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose:
                    this.hide(), Laya.stage.event(a.GO_ON_GAME), Ht.Ins.remuseRecord();
                    break;
                case this._btnVideo:
                    this.videoOpenItem()
            }
        }
        hide() {
            super.hide()
        }
    }
    class m extends Laya.Script3D {
        onAwake() {
            this.owner.getChildByName("Main Camera").enableHDR = !1, this._mainTransform = this.owner
                .getChildByName("Main Camera").transform, this._replayTransform = this.owner.getChildByName(
                    "ReplayCamera").transform;
            var t = this._mainTransform.position,
                e = this._mainTransform.rotation;
            Laya.Tween.to(this._replayTransform.position, {
                x: t.x,
                y: t.y,
                z: t.z
            }, 1e3), Laya.Tween.to(this._replayTransform.rotation, {
                x: e.x,
                r: e.y,
                z: e.z,
                w: e.w
            }, 1e3), Laya.timer.once(1e3, this, () => {
                Laya.stage.event(a.EVENT_PLAYER_WIN)
            })
        }
        onStart() {
            let t = I.haveKongtou,
                e = D.Instance.enterLevel;
            Laya.timer.once(2500, this, () => {
                this.destroy(), 0 == D.Instance.enterType && (Pt.Instance.changeLevel(Pt.Instance
                    .level + 1), e = Pt.Instance.level - 1, 4 == Pt.Instance.level && (Pt
                    .Instance.skillCount += 1)), Ht.Ins.stopRecord(), Laya.stage.offAll(a
                    .CAIDAN_UNLOCK_FINISH), Laya.stage.on(a.CAIDAN_UNLOCK_FINISH, this, () => {
                    let i = Ht.Ins.isScreenCap();
                    if (Pt.Instance.level <= 2 || 0 == i) Gt.Instance.showUI(nt.ResultWin);
                    else {
                        let i = e % 2;
                        e > 2 && 0 == i || t || Mt.Instance.isUnlockCaidan() ? Gt.Instance
                            .showUI(nt.Share) : Gt.Instance.showUI(nt.ResultWin)
                    }
                    Laya.stage.event(Laya.Event.END)
                }), Mt.Instance.checkAwardSkin()
            })
        }
        onUpdate() {
            this._replayTransform.position = this._replayTransform.position, this._replayTransform.rotation =
                this._replayTransform.rotation
        }
    }
    class S {
        constructor() {
            this._skinMap = {}
        }
        static get Instance() {
            return null == S._ins && (S._ins = new S), S._ins
        }
        init() {}
        getSkinIndex(t) {
            let i = 0;
            return i = t >= e.BLUE_BINGSHUANG_SKIN ? t - e.BLUE_BINGSHUANG_SKIN + 1 : e.BLUE_BINGSHUANG_SKIN - t
        }
        getSkinUrl(t) {
            let i = t - e.SKIN_START;
            return i <= S.SKIN_URL_LIST.length - 1 && S.SKIN_URL_LIST[i] || ""
        }
        getSkinName(t) {
            if (t == e.WUCAI_FENGHUANG) return "Colorful God Phoenix";
            let i = t - e.SKIN_START;
            return i <= S.SKIN_NAME_LIST.length - 1 && S.SKIN_NAME_LIST[i] || ""
        }
        isBullet(t) {
            return t < 1015
        }
    }
    S.SKIN_URL_LIST = ["ui://lgmuflyqqd0ex9", "ui://lgmuflyqicpeuk", "ui://lgmuflyqicpeul", "ui://lgmuflyqcxu7s3",
        "ui://lgmuflyqcxu7s2", "ui://lgmuflyqcxu7s1", "ui://lgmuflyqcxu7s0", "ui://lgmuflyqcxu7rz",
        "ui://lgmuflyqcxu7ry", "ui://lgmuflyqcxu7rx", "ui://lgmuflyqcxu7rw", "ui://lgmuflyqcxu7rv",
        "ui://lgmuflyqp2rgmh", "ui://lgmuflyq9jyaef", "ui://lgmuflyq9jyaee", "ui://lgmuflyq9jyaed",
        "ui://lgmuflyq9jyaec", "ui://lgmuflyq9jyaeb", "ui://lgmuflyq9jyaea", "ui://lgmuflyq9jyae9",
        "ui://lgmuflyq9jyae8", "ui://lgmuflyq9jyae7", "ui://lgmuflyq9jyae6", "ui://lgmuflyq9jyae5",
        "ui://lgmuflyq9jyae4", "ui://lgmuflyq9jyae3", "ui://lgmuflyq9jyae2", "ui://lgmuflyq9jyae1",
        "ui://lgmuflyq9jyae0", "ui://lgmuflyq9jyadz", "ui://lgmuflyq9jyady", "ui://lgmuflyq9jyadx",
        "ui://lgmuflyq9jyadw", "ui://lgmuflyqh4vmgl", "ui://lgmuflyqh4vmgk", "ui://lgmuflyqh4vmgj",
        "ui://lgmuflyqh4vmgi", "ui://lgmuflyqh4vmgh", "ui://lgmuflyqp2rgmg", "ui://lgmuflyqp2rgmf",
        "ui://lgmuflyqp2rgme", "ui://lgmuflyqp2rgmd", "ui://lgmuflyqr3t3nb", "ui://lgmuflyq6gi7ra",
        "ui://lgmuflyq6gi7rd", "ui://lgmuflyq6gi7rb", "ui://lgmuflyq6gi7rc", "ui://lgmuflyq6gi7re",
        "ui://lgmuflyq6gi7rf", "ui://lgmuflyq6gi7rg", "ui://lgmuflyq6gi7rh", "ui://lgmuflyqcxu7s4",
        "ui://lgmuflyqicpeuj", "ui://lgmuflyqicpeui", "ui://lgmuflyqqd0exb", "ui://lgmuflyqqd0exa",
        "ui://lgmuflyqhqd8yp", "ui://lgmuflyqhqd8yo"
    ], S.SKIN_NAME_LIST = ["Snow Crown", "Single Dog Food", "FFF Torch", "Hongmeng Purple Gourd", "The Wrath Of The Wind Chaser", "Jet Blade", "Sacred Fire Sword", "Sky Blue Great Sword", "Forgive The Great Sword", "Pink Light Blade",
        "Fire Joy", "Blue Blade", "Ice Crystal Arrow", "Brass Bullet", "Blue And Black", "Blue Cloak", "Western Camouflage", "Golden Reindeer", "Fat Nuclear Bomb", "Purple Shadow Phantom Rabbit", "Shark Attacking", "Pale Skull", "Crazy Toilet Plug",
        "Blue Romance", "Dragon Head Missile", "Surprise Salute", "Quantum Syringe", "Salted Fish Missile", "Big Baby Gourd", "Sawtooth Shark", "Royal Gas Tank", "Fat Head Shark", "Blue Spirit Fishbone", "Bumblebee", "Bubble Fish", "Funny Ball", "Seven Kills Sword",
        "Eros Arrow", "Buddha's Hand", "Red Flame Fire Phoenix", "Spicy Crayfish", "Wind Magic Snail Shell", "Burning Beehive", "Flame Snail Shell", "Scarlet Seven Kills Sword", "Tyrant Gold Coin", "Mission Dongfeng", "Ice Crystal Phoenix", "Shenxiao Leifeng",
        "Destroy The Phoenix", "Gangfeng Phoenix", "Naughty Ghost", "Qi Qiao Zhen", "Single Dog", "Thor's Hammer", "Staff Of Ice", "Wang Crazy Guitar", "Shit"
    ];
    class y extends Laya.Script3D {
        constructor() {
            super(...arguments), this.speed = .008, this._isMove = !0, this._pathIndex = 0, this._isSetPivot = !
                1
        }
        onAwake() {
            this._transform = this.owner.transform, !this._isSetPivot && this._pivot && this.setPivot(this
                ._pivot, this._closewise), n.Instance.playerFenghuang(), Laya.timer.loop(3e4, this, () => {
                n.Instance.playerFenghuang()
            })
        }
        setPivot(t, e) {
            if (this._pivot = t, this._closewise = e, this._transform) {
                this._isSetPivot = !0, e || (this.speed = -this.speed);
                var i = this._transform.position.x - t.x,
                    s = this._transform.position.z - t.z;
                this._radius = Math.sqrt(i * i + s * s), this._rad = Math.atan2(s, i), this.updateRotation()
            }
        }
        onUpdate() {
            if (this._isMove) {
                this._rad -= this.speed;
                var t = this._transform.position;
                t.x = this._radius * Math.cos(this._rad) + this._pivot.x, t.z = this._radius * Math.sin(this
                    ._rad) + this._pivot.z, this._transform.position = t, this.updateRotation()
            }
        }
        updateRotation() {
            this._closewise ? this._transform.localRotationEulerY = -180 * this._rad / Math.PI % 360 : this
                ._transform.localRotationEulerY = (180 - 180 * this._rad / Math.PI) % 360
        }
        movePos() {
            if (this._pathIndex >= w.ENEMY_POSITIONS.length) {
                this.stop();
                let t = E.Instance.playerPos.clone();
                return t.y = this.pos.y, void this.moveTo(t, !0)
            }
            let t = w.ENEMY_POSITIONS[this._pathIndex].clone();
            this._pathIndex++, t.y = this.pos.y, this.stop(), this.moveTo(t)
        }
        moveTo(t, e = !1) {
            let i = new Laya.Vector3;
            Laya.Vector3.subtract(t, this.pos, i), Laya.Vector3.normalize(i, i), this.rotationEuler = this
                .getRotationEulerByDir(i), Laya.Vector3.scale(i, .05, i), Laya.Vector3.add(this.pos, i, i), this
                ._transform.position = i, Laya.Vector3.distance(this.pos, t) > (e ? 1 : .2) ? Laya.timer
                .frameOnce(1, this, this.moveTo, [t, e]) : e ? (this._isMove = !0, this.speed = .008, this
                    .setPivot(t, !1)) : this.movePos()
        }
        getRotationEulerByDir(t) {
            let e = new Laya.Vector3;
            Laya.Vector3.normalize(new Laya.Vector3(t.x, 0, t.z), e);
            let i = new Laya.Vector3(0, 0, 1),
                s = new Laya.Vector3;
            Laya.Vector3.cross(i, e, s);
            let n = Math.acos(Laya.Vector3.dot(i, e));
            return s.y < 0 && (n *= -1), new Laya.Vector3(0, 180 * n / Math.PI - 180, 0)
        }
        get rotationEuler() {
            return this.owner && this.owner.transform ? this._transform.localRotationEulerY : null
        }
        set rotationEuler(t) {
            t && this.owner && this.owner.transform && (this._transform.localRotationEulerY = t.y)
        }
        get pos() {
            return this._transform.position
        }
        set pos(t) {
            this._transform && (this._transform.position = t)
        }
        get rotation() {
            return this._transform.rotation
        }
        set rotation(t) {
            this._transform.rotation = t
        }
        stopMove() {
            this._isMove = !1
        }
        stop() {
            this.stopMove()
        }
    }
    class L extends Laya.Scene {
        constructor() {
            super(), this._isLoadImg = !1, this._isAutoDraw = !1, this._dw = 512, this._dh = 512, this
                ._lineWidth = 20, this._color = "#000000", this._minDistance = 0, this._isMouseDown = !1, this
                ._drawPoints = [], this._tempPoints = []
        }
        static get Instance() {
            return L._ins || (L._ins = new L)
        }
        setInfo(t, e, i = !0) {
            if (this._offsetx = t, this._offsety = e, this._drawTexSpr || (this._drawTexSpr = new Laya.Sprite,
                    this._drawTexSpr.loadImage("res/7x_head_w.png")), this._graphicsTex = this._drawTexSpr
                .graphics, i && !this._drawTexSpr.parent && this.addChild(this._drawTexSpr), i || this
                ._drawTexSpr.removeSelf(), this._drawTexSpr.x = this._offsetx, this._drawTexSpr.y = this
                ._offsety, this._drawBGSpr || (this._drawBGSpr = new Laya.Sprite), this._drawBGSpr.x = this
                ._drawTexSpr.x, this._drawBGSpr.y = this._drawTexSpr.y, this._graphicsBG = this._drawBGSpr
                .graphics, i && !this._drawBGSpr.parent && this.addChild(this._drawBGSpr), i || this._drawBGSpr
                .removeSelf(), !this._cloneTex) {
                let t = new Laya.Sprite;
                t.loadImage("res/7x_head_w.png", Laya.Handler.create(this, () => {
                    this._cloneTex = t.texture, this._isLoadImg = !0, this._isAutoDraw && this
                        .autoDraw()
                }))
            }
        }
        addEvent() {
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.off(Laya.Event.MOUSE_MOVE,
                this, this.onMouseMove), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp)
        }
        removeEvent() {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.off(Laya.Event.MOUSE_MOVE,
                this, this.onMouseMove), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp)
        }
        show(t) {
            this._mesh = t.mesh, this._mesh && (this.drawMaterial = this.uiMaterial || (this.uiMaterial = this
                    .createMaterial()), this._drawPoints = [], this._tempPoints = Pt.Instance.drawPoints ||
                [], this.addEvent(), this.autoDraw(this._isLoadImg ? 0 : 1e3))
        }
        showAIFace() {
            this.drawMaterial = this.aiMaterial || (this.aiMaterial = this.createMaterial())
        }
        showDIYFace() {
            this.drawMaterial = this.uiMaterial || (this.uiMaterial = this.createMaterial())
        }
        showSprite(t) {
            this._drawTexSpr.visible = t, this._drawBGSpr.visible = t
        }
        onMouseDown(t) {
            Ht.Ins._isStarRecord ? Ht.Ins.remuseRecord() : Ht.Ins.startRecord(), Laya.stage.on(Laya.Event
                .MOUSE_MOVE, this, this.onMouseMove), Laya.stage.on(Laya.Event.MOUSE_UP, this, this
                .onMouseUp), t.stopPropagation();
            let e = t.stageX - this._offsetx,
                i = t.stageY - this._offsety;
            this.isPointInSprite(e, i) && (this._drawPoints = [], this._isMouseDown = !0, this.addPoint(e, i),
                this._downx = e, this._downy = i, this.startDrawPoint(e, i))
        }
        onMouseMove(t) {
            if (t.stopPropagation(), this._isMouseDown) {
                let e = t.stageX - this._offsetx,
                    i = t.stageY - this._offsety;
                if (!this.isPointInSprite(e, i)) return;
                this.drawLine(e, i);
                let s = e - this._downx,
                    n = i - this._downy;
                if (s * s + n * n < this._minDistance) return;
                e = this.lerp(this._downx, e, .5), i = this.lerp(this._downy, i, .5), this._downx = e, this
                    ._downy = i, this.addPoint(e, i)
            }
        }
        onMouseUp(t) {
            t.stopPropagation(), Ht.Ins.canShareRecord() && Ht.Ins.pauseRecord(), console.log("Record Time :",
                Ht.Ins.getRecordTime()), this._isMouseDown && (this._isMouseDown = !1, this._drawPoints
                .length <= 1 || this.createTex())
        }
        startDrawPoint(t, e) {
            this._startx = t, this._starty = e
        }
        isPointInSprite(t, e) {
            return t >= 0 && t <= this._dw && e >= 0 && e <= this._dh
        }
        addPoint(t, e) {
            t = Math.round(t), e = Math.round(e), this._drawPoints.push(this.vec2(t, e))
        }
        lerp(t, e, i) {
            return (t + e) * i
        }
        vec2(t, e) {
            return new Laya.Vector2(t, e)
        }
        drawLine(t, e) {
            t = this.lerp(this._startx, t, .5), e = this.lerp(this._starty, e, .5), this._graphicsTex
                .drawCircle(this._startx, this._starty, .5 * this._lineWidth, this._color), this._graphicsTex
                .drawLine(this._startx, this._starty, t, e, this._color, this._lineWidth), this._startx = t,
                this._starty = e
        }
        createTex() {
            if (this._mesh) {
                this.fixSpritedrawToTexture();
                var t = this._drawTexSpr.drawToTexture(this._dw, this._dh, this._offsetx, this._offsety);
                this.setMaterial(t)
            }
        }
        setMaterial(t) {
            if (!this._mesh || !t) return;
            let e = this._mesh,
                i = t;
            this.drawMaterial.albedoTexture && this.drawMaterial.albedoTexture.bitmap.destroy(), this
                .drawMaterial.albedoTexture = i, this.drawMaterial.albedoColor = new Laya.Vector4(1, 1, 1, 1), e
                .skinnedMeshRenderer.material = this.drawMaterial, this._drawPoints && this._drawPoints.length >
                0 && this._tempPoints.push(this._drawPoints)
        }
        createMaterial() {
            return new Laya.UnlitMaterial
        }
        clearDraw() {
            this._graphicsTex.clear(), this._graphicsBG.clear(), this._drawPoints = [], this._tempPoints = [],
                this.createTex(), Ht.Ins.stopRecord()
        }
        removeUI() {
            Ht.Ins.stopRecord(), this._graphicsTex.clear(), this._graphicsBG.clear(), this._mesh = null, this
                .removeEvent(), this.removeSelf()
        }
        fixSpritedrawToTexture() {
            let t = Laya.Texture,
                e = Laya.Sprite,
                i = Laya.RenderSprite,
                s = Laya.Context;
            e.drawToTexture = function(n, a, o, h, r, l, c = null) {
                e.drawtocanvCtx || (e.drawtocanvCtx = new s), r -= n.x, l -= n.y, r |= 0, l |= 0, o |= 0,
                    h |= 0;
                var _ = c ? e.drawtocanvCtx : new s;
                if (_.clear(), _.size(o, h), c ? _._targets = c : _.asBitmap = !0, _.scale(1, -1), _
                    .translate(0, -h), _._targets.start(), _._targets.clear(0, 0, 0, 0), i.renders[a]._fun(
                        n, _, r, l), _.flush(), _._targets.end(), _._targets.restore(), !c) {
                    var d = new t(_._targets, t.INV_UV);
                    return _.destroy(!0), d
                }
                return n._repaint = 0, c
            }
        }
        autoDraw(t = 500) {
            this._isAutoDraw = !0, this._isLoadImg && Laya.timer.once(t, this, () => {
                let t = Pt.Instance.drawPoints;
                if (t && 0 != t.length) {
                    for (let e = 0; e < t.length; e++) {
                        let i = t[e];
                        this._startx = i[0].x, this._starty = i[0].y;
                        for (let t = 1; t < i.length; t++) this.drawLine(i[t].x, i[t].y)
                    }
                    this.createTex()
                }
            })
        }
        getDrawPoints() {
            return this._drawPoints
        }
        getTempPoints() {
            return this._tempPoints
        }
        static changeMaterial(t) {
            t && (L.Instance.setInfo(0, 0, !1), L.Instance._mesh = t, L.Instance.drawMaterial = L.Instance
                .modelMaterial || (L.Instance.modelMaterial = L.Instance.createMaterial()), L.Instance
                .autoDraw(L.Instance._isLoadImg ? 0 : 500))
        }
    }
    class p extends Laya.Script3D {
        constructor() {
            super(...arguments), this._currAniIndex = 0
        }
        onAwake() {
            this._transform = this.owner.transform, this._ani = this.owner.getComponent(Laya.Animator), this
                ._headAni = this.owner.getChildByName("7x_girl_head_5").getComponent(Laya.Animator), this
                ._fazhang = this.owner.getChildByName("Bip001").getChildByName("Bip001 Pelvis").getChildByName(
                    "Bip001 Spine").getChildByName("Bip001 Spine1").getChildByName("Bip001 Neck")
                .getChildByName("Bip001 R Clavicle").getChildByName("Bip001 R UpperArm").getChildByName(
                    "Bip001 R Forearm").getChildByName("Bip001 R Hand").getChildByName("fazhang"), this
                .playAni(), this.refreshFace()
        }
        playAni() {
            let t = ["1", "2", "3", "4", "5", "6"],
                e = t[this._currAniIndex],
                i = this.owner.getChildByName("FX_emoji");
            i && (i.active = !0, i.getChildByName("1").active = 0 == this._currAniIndex, i.getChildByName("2")
                    .active = 1 == this._currAniIndex, i.getChildByName("4").active = 3 == this._currAniIndex),
                this._ani.crossFade(e, 0, 0), this._headAni && this._headAni.crossFade(e, 0, 0), this
                ._currAniIndex++, this._currAniIndex = this._currAniIndex % t.length, Laya.timer.once(5e3, this,
                    this.playAni)
        }
        refreshFace() {
            if (!this._transform) return;
            let t = Pt.Instance.useAIFaceIndex;
            if (this._fazhang.active = 4 == t && Pt.Instance.isSkinUnlock(e.TASK_BINGFAZHANG), (-1 == t || t >
                    4) && (!Pt.Instance.drawPoints || 0 == Pt.Instance.drawPoints.length) && Pt.Instance
                .AIFaceUnlockList && Pt.Instance.AIFaceUnlockList.length > 0 && (t = Pt.Instance
                    .AIFaceUnlockList[0], Pt.Instance.useAIFaceIndex = t, console.log("-----------faceIndex:",
                        t)), console.log("-----------GameDataMgr.Instance.drawPoints:", Pt.Instance.drawPoints,
                    t), t >= 0 && (!Pt.Instance.drawPoints || 0 == Pt.Instance.drawPoints.length)) this.owner
                .getChildByName("7x_girl_body").active = !0, this.owner.getChildByName("7x_girl_eyes_1")
                .active = 0 == t || 1 == t || 4 == t, this.owner.getChildByName("7x_girl_eyes_3").active = 2 ==
                t, this.owner.getChildByName("7x_girl_eyes_4").active = 3 == t, this.owner.getChildByName(
                    "7x_girl_hair_0").active = !1, this.owner.getChildByName("7x_girl_hair_2").active = !1, this
                .owner.getChildByName("7x_girl_hair_3").active = !1, this.owner.getChildByName("7x_girl_hair_4")
                .active = !1, this.owner.getChildByName("7x_girl_hair_5").active = !1, this.owner
                .getChildByName("7x_girl_head_0").active = !1, this.owner.getChildByName("7x_girl_head_1")
                .active = 0 == t, this.owner.getChildByName("7x_girl_head_2").active = 1 == t, this.owner
                .getChildByName("7x_girl_head_3").active = 2 == t, this.owner.getChildByName("7x_girl_head_4")
                .active = 3 == t, this.owner.getChildByName("7x_girl_head_5").active = 4 == t;
            else {
                let e = t;
                this.owner.getChildByName("7x_girl_body").active = !0, this.owner.getChildByName(
                        "7x_girl_eyes_1").active = !1, this.owner.getChildByName("7x_girl_eyes_3").active = !1,
                    this.owner.getChildByName("7x_girl_eyes_4").active = !1, this.owner.getChildByName(
                        "7x_girl_hair_0").active = 0 == e || -1 == e, this.owner.getChildByName(
                        "7x_girl_hair_2").active = 1 == e, this.owner.getChildByName("7x_girl_hair_3").active =
                    2 == e, this.owner.getChildByName("7x_girl_hair_4").active = 3 == e, this.owner
                    .getChildByName("7x_girl_hair_5").active = 4 == e, this.owner.getChildByName(
                        "7x_girl_head_0").active = !0, this.owner.getChildByName("7x_girl_head_1").active = !1,
                    this.owner.getChildByName("7x_girl_head_2").active = !1, this.owner.getChildByName(
                        "7x_girl_head_3").active = !1, this.owner.getChildByName("7x_girl_head_4").active = !1,
                    this.owner.getChildByName("7x_girl_head_5").active = !1;
                let i = this.owner.getChildByName("7x_girl_head_0");
                L.changeMaterial(i)
            }
        }
        get pos() {
            return this._transform.position
        }
        set pos(t) {
            this._transform && (this._transform.position = t)
        }
        get rotation() {
            return this._transform.rotation
        }
        set rotation(t) {
            this._transform.rotation = t
        }
        set rotationEuler(t) {
            this._transform.localRotationEuler = t
        }
        destroy() {
            Laya.timer.clearAll(this), this.owner && (this.owner.active = !1, this.owner.destroy()), super
                .destroy()
        }
    }
    class f {
        constructor(t, e) {
            t && e ? (this._min = t, this._max = e) : this.reset()
        }
        reset() {
            this._min = new Laya.Vector3(99999, 99999, 99999), this._max = new Laya.Vector3(-99999, -99999, -99999)
        }
        getCenter() {
            let t = new Laya.Vector3;
            return t.x = .5 * (this._min.x + this._max.x), t.y = .5 * (this._min.y + this._max.y), t.z = .5 * (this
                ._min.z + this._max.z), t
        }
        intersects(t) {
            return (this._min.x >= t._min.x && this._min.x <= t._max.x || t._min.x >= this._min.x && t._min.x <=
                this._max.x) && (this._min.y >= t._min.y && this._min.y <= t._max.y || t._min.y >= this._min
                .y && t._min.y <= this._max.y) && (this._min.z >= t._min.z && this._min.z <= t._max.z || t._min
                .z >= this._min.z && t._min.z <= this._max.z)
        }
        containPoint(t) {
            return !(t.x < this._min.x) && (!(t.y < this._min.y) && (!(t.z < this._min.z) && (!(t.x > this._max
                .x) && (!(t.y > this._max.y) && !(t.z > this._max.z)))))
        }
        isEmpty() {
            return this._min.x > this._max.x || this._min.y > this._max.y || this._min.z > this._max.z
        }
    }
    class C {
        constructor() {}
        static pushEnemy(t) {
            C.enemyList || (C.enemyList = []), C.setEnemyCld(t, !1), C.enemyList.push(t)
        }
        static clrarData() {
            C.dcAABB || (C.dcAABB = new f), C.dcAABB.reset();
            for (let t = 0; t < C.enemyList.length; t++) {
                let e = C.enemyList[t];
                C.setEnemyCld(e, !0)
            }
            C.enemyList = []
        }
        static detection(t) {
            let e = C.bulletOBBs[Pt.Instance.useSkinId];
            if (e) {
                let i = new Laya.Vector3(t.x + e.x / 2, t.y + e.y / 2, t.z + e.z / 2),
                    s = new Laya.Vector3(t.x - e.x / 2, t.y - e.y / 2, t.z - e.z / 2),
                    n = new f(s, i);
                if (C.dcAABB.intersects(n)) {
                    let t = !0;
                    for (let e = 0; e < C.enemyList.length; e++) {
                        let i = C.enemyList[e];
                        if (i) {
                            if (o.Instance.deads.indexOf(i) >= 0) continue;
                            let e = i.transform.position.clone(),
                                s = !0;
                            i.name.indexOf("boss") >= 0 && (s = !1);
                            let a = C.getOffEnemyY(s),
                                h = C.getEnemyRange(s),
                                r = new Laya.Vector3(e.x + h.x / 2, e.y + h.y / 2 + a, e.z + h.z / 2),
                                l = new Laya.Vector3(e.x - h.x / 2, e.y - h.y / 2 + a, e.z - h.z / 2),
                                c = new f(l, r);
                            if (n.intersects(c)) return t = !1, i
                        }
                    }
                }
            }
            return null
        }
        static setEnemyCld(t, e) {
            if (!t.transform) return;
            let i = t.getComponent(Laya.PhysicsCollider);
            i && (i.enabled = e, "HIT_point" == t.name && (t.active = e));
            for (let i = 0; i < t.numChildren; i++) {
                let s = t.getChildAt(i);
                C.setEnemyCld(s, e)
            }
        }
        static getOffEnemyY(t) {
            return t ? C.offenemyY : C.bossOffEnemyY
        }
        static getEnemyRange(t) {
            return t ? C.enrmyRange : C.bossEnemyRange
        }
    }
    C.dcAABB = new f, C.enemyList = [], C.enrmyRange = new Laya.Vector3(.5, 1.6, .35), C.offenemyY = .9, C
        .bossEnemyRange = new Laya.Vector3(.8, 4, .5), C.bossOffEnemyY = 2, C.bulletOBBs = {
            1042: new Laya.Vector3(1, .6, 1),
            1043: new Laya.Vector3(.1, .1, .5),
            1044: new Laya.Vector3(1.5, .5, 1.5),
            1046: new Laya.Vector3(1.5, .3, 1.5)
        };
    class A {
        constructor() {}
        static get Instance() {
            return null == A._ins && (A._ins = new A), A._ins
        }
        replay() {
            this._fhScript && this._fhScript.destroy(), Gt.Instance.showUI(nt.Replay), this._levelGO = D.Instance
                .levelGO, Laya.stage.offAll(Laya.Event.COMPLETE), Laya.stage.on(Laya.Event.COMPLETE, this, () => {
                    this._levelGO.addComponent(m)
                }), Laya.stage.offAll(a.EVENT_PLAYER_WIN), Laya.stage.on(a.EVENT_PLAYER_WIN, this, () => {
                    Gt.Instance.hideUI(nt.Replay);
                    let t = this._levelGO.getChildByName("Player_new").getComponent(Laya.Animator),
                        e = S.Instance.isBullet(Pt.Instance.useSkinId);
                    t.play(e ? U.shouqiangwin : U.huojiantongwin)
                }), this.init()
        }
        init() {
            this._levelGO.getChildByName("Main Camera").active = !1, this._levelGO.getChildByName("ReplayCamera")
                .active = !0, this._girlScript && (this._girlScript.destroy(), this._girlScript = null), Laya.timer
                .once(0, this, () => {
                    var t = Laya.Sprite3D.instantiate(Laya.Loader.getRes(Yt.bulletUrl(Pt.Instance.useSkinId)));
                    this._levelGO.addChild(t);
                    let i = this._levelGO.getChildByName("Player_new"),
                        s = Laya.Sprite3D.instantiate(Laya.Loader.getRes(Yt.PLAYER_new), this._levelGO);
                    s.name = i.name, s.getComponent(Laya.Rigidbody3D).destroy();
                    let n = s.getComponent(Laya.PhysicsCollider);
                    n && n.destroy();
                    Pt.Instance.useAIFaceIndex >= 0 || Pt.Instance.drawPoints && Pt.Instance.drawPoints.length;
                    let a = i.transform.position;
                    s.transform.position = a, s.transform.rotation = i.transform.rotation, s.transform
                        .localScale = i.transform.localScale, i.removeSelf(), s.active = !0;
                    let o = s.getComponent(Laya.Animator),
                        h = S.Instance.isBullet(Pt.Instance.useSkinId);
                    if (o.play(h ? U.shouqiangattack : U.huojiantongattack), this.initGirl(s.transform), Pt
                        .Instance.isSkinUnlock(e.WUCAI_FENGHUANG) && this.initWuCaiFenghang(s.transform.position
                            .clone()), Pt.Instance.useSkinId == e.WUCAI_FENGHUANG) {
                        let e = Laya.Sprite3D.instantiate(Laya.Loader.getRes(Yt.PLAYER_new));
                        e.getComponent(Laya.Rigidbody3D).destroy();
                        let i = e.getComponent(Laya.PhysicsCollider);
                        i && i.destroy(), e.transform.localScale = new Laya.Vector3(.2, .2, .2), e.transform
                            .localPosition = new Laya.Vector3(0, 0, 0), e.transform.localRotationEuler =
                            new Laya.Vector3(0, 180, 0), t.addChild(e), e.getComponent(Laya.Animator).speed = 0,
                            s.active = !1, this._fhScript && this._fhScript.owner && (this._fhScript.owner
                                .active = !1, this._fhScript.stop(), this._fhScript.enabled = !1)
                    }
                    let r = this._levelGO.getChildByName("BulletSpawn").transform,
                        l = this._levelGO.getChildByName("HJYSpawn").transform;
                    let c = Laya.Sprite3D.instantiate(Laya.Loader.getRes(h ? Yt.FIRE_BULLET : Yt.FIRE_HJT)),
                        _ = h ? new Laya.Vector3(r.position.x, r.position.y, r.position.z - .5) : new Laya
                        .Vector3(l.position.x, l.position.y, l.position.z - .5);
                    c.transform.position = _, this._levelGO.addChild(c), this._yingziY = -9999;
                    for (var d = [], I = this._levelGO.getChildByName("Enemies"), m = 0; m < I
                        .numChildren; m++) {
                        var y = I.getChildAt(m);
                        y.transform.position.y > this._yingziY && (this._yingziY = y.transform.position.y);
                        let t = !1;
                        var L = y.name.startsWith("boss_") ? y.name.substr(5) : y.name;
                        y.name.startsWith("eqiup_") && (L = y.name.substr(8), t = !0), L.indexOf(" ") >= 0 && (
                            L = L.substring(0, L.indexOf(" ")));
                        let e = y.name.indexOf("boss") >= 0,
                            i = t ? Yt.EQIUP_ENEMY : e ? Yt.BOSS : Yt.ENEMY,
                            s = Laya.Sprite3D.instantiate(Laya.Loader.getRes(i));
                        I.addChildAt(s, m), s.name = y.name, s.transform.position = y.transform.position, s
                            .transform.rotation = y.transform.rotation, s.transform.localScale = y.transform
                            .localScale, e && C.setEnemyCld(s, !1), y.removeSelf(), s.transform.position = w
                            .ENEMY_POSITIONS[m], d.push(s), (T = s.getComponent(Laya.Animator)).play(L, 0, 0), s
                            .getChildByName("dialog_enemy") && (s.getChildByName("dialog_enemy").active = D
                                .Instance.enterLevel <= 2);
                        let n, a = s.getChildByName("feiskin2");
                        if (a) {
                            let t = s.name.split("_");
                            t && t.length > 1 && "0" == t[1] && (a.getChildByName("HIT_point_coat").active = !
                                1), t && t.length > 1 && "1" == t[1] && (a.getChildByName("HIT_point_cap")
                                    .active = !1), a.getComponent(Laya.Animator).play(L, 0, 0)
                        }
                        if ("walk" == L ? n = s.addComponent(g) : "run" == L && (n = s.addComponent(u)), n) {
                            var p = this._levelGO.getChildByName("EnemyPivots").getChildAt(m).transform;
                            n.setPivot(p.position, p.localRotationEulerY >= 0)
                        }
                    }
                    var f = this._levelGO.getChildByName("Civilians");
                    if (f && f.numChildren > 0)
                        for (m = 0; m < f.numChildren; m++) {
                            var A = f.getChildAt(m);
                            let t = Laya.Sprite3D.instantiate(Laya.Loader.getRes(Yt.CIVILIAN));
                            f.addChildAt(t, m), t.name = A.name, t.transform.position = A.transform.position, t
                                .transform.rotation = A.transform.rotation, t.transform.localScale = A.transform
                                .localScale, A.removeSelf(), t.transform.position = w.CIVILIAN_POSITIONS[m];
                            var T = t.getComponent(Laya.Animator);
                            let e, i = t.name;
                            if (i.indexOf(" ") >= 0 && (i = i.substring(0, i.indexOf(" "))), T.play(i, 0, 0), t
                                .getChildByName("dialog_npc").active = D.Instance.enterLevel <= 2, "walk" == i ?
                                e = t.addComponent(g) : "run" == i && (e = t.addComponent(u)), e) {
                                p = this._levelGO.getChildByName("CivilianPivots").getChildAt(m).transform;
                                e.setPivot(p.position, p.localRotationEulerY >= 0)
                            }
                        }
                    t.addComponent(w).setData(d)
                }), this.downJLS()
        }
        downJLS() {
            let t = this._levelGO.getChildByName("JLSPoint");
            if (!t) return;
            if (!o.Instance.haveJLS || !E.Instance.jlsURL) return;
            n.Instance.playJLS();
            let e = Laya.loader.getRes(E.Instance.jlsURL),
                i = this;
            if (e) {
                e.active = !0;
                let i = e.clone();
                this._levelGO.addChild(i);
                let s = t.transform.position.y;
                i.transform.position = new Laya.Vector3(t.transform.position.x, s + 5, t.transform.position.z), i
                    .getChildByName("jiangluosan").getComponent(Laya.Animator).speed = 0;
                let n = Laya.Sprite3D.instantiate(Laya.loader.getRes(Yt.YingZi), i).transform;
                n.position = new Laya.Vector3(i.transform.position.x, this._yingziY, i.transform.position.z), i
                    .getChildByName("YingZi_JLS").active = !1;
                let a = i.transform.position.y;
                this.JLSFallOff(i, n, s, a)
            } else Laya.loader.create([E.Instance.jlsURL], Laya.Handler.create(i, () => {
                i.downJLS()
            }))
        }
        JLSFallOff(t, e, i, s) {
            if (!t || !t.parent) return;
            let n = Rt.JLS_SPEED * Rt.RECORD_FRAME_INTERVAL,
                a = new Laya.Vector3(0, n, 0);
            t.transform.translate(a, !1), e.position = new Laya.Vector3(e.position.x, this._yingziY, e.position.z);
            let o = (s - t.transform.position.y) / s * 10;
            e.localScale = new Laya.Vector3(o, o, o), t.transform.position.y > i ? Laya.timer.frameOnce(1, this,
                    this.JLSFallOff, [t, e, i, s]) : t.getChildByName("jiangluosan").getComponent(Laya.Animator)
                .speed = 1
        }
        initWuCaiFenghang(t) {
            let i = this,
                s = Yt.bulletUrl(e.WUCAI_FENGHUANG);
            if (Laya.loader.getRes(s)) {
                let e = Laya.Sprite3D.instantiate(Laya.loader.getRes(s));
                D.Instance.levelGO.addChild(e), e.transform.position = new Laya.Vector3(t.x + 2, t.y + 2, t.z), this
                    ._fhScript = e.addComponent(y), this._fhScript.setPivot(t, !1)
            } else Laya.loader.create(s, Laya.Handler.create(i, () => {
                i.initWuCaiFenghang(t)
            }))
        }
        initGirl(t) {
            if (Pt.Instance.useAIFaceIndex < 0 && (!Pt.Instance.drawPoints || 0 == Pt.Instance.drawPoints.length))
                return;
            let e = t.position.clone();
            if (this._girlScript) return void this._girlScript.refreshFace();
            let i = Yt.GirlURL();
            if (Laya.loader.getRes(i)) {
                let s = Laya.Sprite3D.instantiate(Laya.loader.getRes(i)),
                    n = !1;
                s.transform.position = new Laya.Vector3(e.x - (n ? 2 : .8), e.y, e.z), Yt.isHai(D.Instance
                        .enterLevel) && (s.transform.position = new Laya.Vector3(e.x, e.y, e.z - (n ? 2 : .7))), s
                    .transform.localScale = new Laya.Vector3(1, 1, 1);
                let a = t.localRotationEuler.clone();
                s.transform.localRotationEuler = new Laya.Vector3(a.x, a.y, a.z), D.Instance.levelGO.addChild(s),
                    this._girlScript = s.addComponent(p)
            } else Laya.loader.create(i, Laya.Handler.create(this, () => {
                this.initGirl(t)
            }))
        }
        get fhScript() {
            return this._fhScript
        }
    }
    class w extends Laya.Script3D {
        constructor() {
            super(...arguments), this._dieEnemy = [], this._frame = 0, this.moreFrame = !1, this.overEnd = !1
        }
        onStart() {
            this._transfrom = this.owner.transform, this._levelGO = this.owner.parent, this.moreFrame = !1, Pt
                .Instance.useSkinId == e.TASK_GUITAR && (this.owner.getChildByName("kill").active = !1, n
                    .Instance.playGameBgm(!0))
        }
        onUpdate() {
            if (!this.overEnd) {
                var t = 7 * this._frame;
                if (t >= this._bulletData.length) {
                    if (this.moreFrame) return void(Pt.Instance.useSkinId == e.TASK_GUITAR ? (this.overEnd = !0,
                        Laya.timer.once(1e3, this, () => {
                            this.destroy(), Laya.stage.event(Laya.Event.COMPLETE)
                        })) : (this.destroy(), Laya.stage.event(Laya.Event.COMPLETE)));
                    t = this._bulletData.length - 1, this.moreFrame = !0
                }
                for (this._transfrom.position = new Laya.Vector3(this._bulletData[t], this._bulletData[t + 1],
                        this._bulletData[t + 2]), this._transfrom.rotation = new Laya.Quaternion(this
                        ._bulletData[t + 3], this._bulletData[t + 4], this._bulletData[t + 5], this._bulletData[
                            t + 6]), this._fhData && this._fhData.length > 0 && (A.Instance.fhScript.pos =
                        new Laya.Vector3(this._fhData[t], this._fhData[t + 1], this._fhData[t + 2]), A.Instance
                        .fhScript.rotation = new Laya.Quaternion(this._fhData[t + 3], this._fhData[t + 4], this
                            ._fhData[t + 5], this._fhData[t + 6])); this._enemyData.length > 0 && this._frame ==
                    this._enemyData[0];) {
                    e.TASK_RANGE_LIST.indexOf(Pt.Instance.useSkinId) < 0 && n.Instance.playHit(), n.Instance
                        .playeDie();
                    var i = this._enemies[this._enemyData[1]];
                    let t = U.die_back,
                        a = 1;
                    this._actionData && this._actionData.length > 0 && (t = this._actionData[0], this
                            ._actionData.splice(0, 1)), i.getChildByName("YingZi") && (i.getChildByName(
                            "YingZi").active = !1), t == U.die_guiter && (a = 2), i.getComponent(Laya.Animator)
                        .speed = a, i.getComponent(Laya.Animator).play(t, 0, 0);
                    var s = i.getComponent(g);
                    s && s.destroy();
                    let o = null,
                        h = i.getChildByName("feiskin2");
                    if (h && ((o = h.getComponent(Laya.Animator)).speed = a, o.play(t, 0, 0)), this._enemyData
                        .splice(0, 2), this._dieEnemy.push(i), e.TASK_RANGE_LIST.indexOf(Pt.Instance
                        .useSkinId) >= 0 && t != U.die_back) {
                        let t = !1;
                        if (i.name.indexOf("boss") >= 0 && (t = !0), this.playHitRange(i.transform.position
                                .clone(), t), Pt.Instance.useSkinId == e.TASK_LEISHENGCHUI) {
                            i.getChildByName("Bullet_NPC").skinnedMeshRenderer.material.albedoColor = new Laya
                                .Vector4(0, 0, 0, 1);
                            let t = this.owner.getComponent(Laya.Animator);
                            t.speed = 2, t.play("lenshenchui_ani_attack", 0, 0), Laya.timer.once(150, this,
                            () => {
                                    t.play("lenshenchui_ani", 0, 0)
                                })
                        } else Pt.Instance.useSkinId == e.TASK_BINGFAZHANG && (i.active = !1)
                    }
                }
                if (this._otherData.length > 0 && this._frame == this._otherData[0])
                    if (this._otherData[1] == at.BOSS_HIT && this._levelGO) {
                        let t = this._levelGO.getChildByName("Enemies");
                        if (t && t.numChildren > 0)
                            for (let e = 0; e < t.numChildren; e++) {
                                let i = t.getChildAt(e);
                                if (i.name.indexOf("boss") >= 0) {
                                    i.getChildAt(this._otherData[2]).active = !1, n.Instance.playHit();
                                    break
                                }
                            }
                        this._otherData.splice(0, 3)
                    } else if (this._otherData[1] == at.GLASS && this._levelGO) {
                    let t = this._levelGO.getChildAt(this._otherData[2]);
                    if (t) {
                        n.Instance.playHit();
                        let e = t.getChildByName("window");
                        e && (e.active = !1);
                        let i = t.getChildByName("broken_FX");
                        i && i.particleSystem.play()
                    }
                    this._otherData.splice(0, 3)
                } else if (this._otherData[1] == at.yugang && this._levelGO) {
                    let t = this._levelGO.getChildAt(this._otherData[2]);
                    if (t) {
                        n.Instance.playHit(), t.getChildAt(0).active = !1, t.getChildAt(1).active = !1;
                        let e = t.getChildByName("broken_FX");
                        e && e.particleSystem.play()
                    }
                    this._otherData.splice(0, 3)
                } else if (this._otherData[1] == at.WaspNest && this._levelGO) n.Instance.playHit(), this
                    ._otherData.splice(0, 2);
                else if (this._otherData[1] == at.RanShaoFengChao && this._levelGO) {
                    let t = this._levelGO.getChildByName("WaspNest");
                    t && (t.active = !1, n.Instance.playHit()), this._otherData.splice(0, 2)
                } else if (this._otherData[1] == at.useSkill && this._levelGO) {
                    let t = this._levelGO.getChildByName("Enemies");
                    if (t && t.numChildren > 0) {
                        let e = Laya.loader.getRes(Yt.qiulongURL()),
                            i = e.clone();
                        if ("qiulong" == i.name)
                            for (let i = 0; i < t.numChildren; i++) {
                                let s = t.getChildAt(i);
                                if (this._dieEnemy.indexOf(s) >= 0) continue;
                                let n = e.clone();
                                n.getComponent(Laya.Animator).speed = 1, s.name.indexOf("boss_") >= 0 ? n
                                    .transform.localScale = new Laya.Vector3(1, 1, 1) : n.transform.localScale =
                                    new Laya.Vector3(.6, .8, .6), n.transform.position = s.transform.position,
                                    this.owner.parent.addChild(n);
                                let a = s.getComponent(g);
                                a && a.stop();
                                let o = s.getComponent(u);
                                o && o.stop()
                            } else if ("FX_Thunder_skill" == i.name || "FX_snow_skill" == i.name ||
                                "FX_Guitar_skill" == i.name) {
                                let e = this._levelGO.getChildByName("Player_new").transform.position.clone(); -
                                1 != D.Instance.BGName.indexOf("haidi") ? (e.x += 8, i.transform
                                        .localRotationEuler = new Laya.Vector3(0, -90, 0)) : e.z -= 8,
                                    "FX_Thunder_skill" == i.name ? i.getComponent(Laya.Animator).speed = .5 :
                                    "FX_snow_skill" == i.name ? i.getChildByName("ani").getComponent(Laya
                                        .Animator).speed = 2 : "FX_Guitar_skill" == i.name && (i.getComponent(
                                        Laya.Animator).speed = 2), this.owner.parent.addChild(i), i.transform
                                    .position = e;
                                let s = new Laya.Vector3(.6, .8, .6);
                                if ("FX_Guitar_skill" == i.name && (s.x = 1.7, s.y = 1.7, s.z = 1.7), i
                                    .transform.localScale = s, "FX_snow_skill" == i.name) {
                                    let t = Laya.Sprite3D.instantiate(Laya.loader.getRes(Yt.GirlURL()));
                                    i.addChild(t), t.transform.localPosition = new Laya.Vector3(0, 1, 0), t
                                        .getComponent(Laya.Animator).speed = 2, t.getComponent(Laya.Animator)
                                        .play("huiwu");
                                    for (let e = 0; e < t.numChildren; e++) {
                                        let i = t.getChildAt(e);
                                        "Bip001" == i.name || "7x_girl_body" == i.name || "7x_girl_eyes_1" == i
                                            .name || "7x_girl_head_5" == i.name ? i.active = !0 : i.active = !1
                                    }
                                }
                                for (let e = 0; e < t.numChildren; e++) {
                                    let i = t.getChildAt(e);
                                    if (this._dieEnemy.indexOf(i) >= 0) continue;
                                    let s = i.getComponent(g);
                                    s && s.stop();
                                    let n = i.getComponent(u);
                                    n && n.stop()
                                }
                            }
                    }
                    n.Instance.playSkill(), this._otherData.splice(0, 2)
                } else if (this._otherData[1] == at.JLS && this._levelGO) {
                    let t = null;
                    for (let e = 0; e < this._levelGO.numChildren; e++) {
                        let i = this._levelGO.getChildAt(e);
                        if (i.numChildren > 0 && i.name.indexOf("JLS") >= 0) {
                            t = this._levelGO.getChildAt(e);
                            break
                        }
                    }
                    t && (t.active = !1, n.Instance.playHit()), this._otherData.splice(0, 2)
                } else if (this._otherData[1] == at.SUN && this._levelGO) {
                    let t = this._levelGO.getChildAt(this._otherData[2]);
                    t && (n.Instance.playHit(), t.active = !1), this._otherData.splice(0, 3)
                } else if (this._otherData[1] == at.Moon && this._levelGO) {
                    let t = this._levelGO.getChildAt(this._otherData[2]);
                    t && (n.Instance.playHit(), t.active = !1), this._otherData.splice(0, 3)
                } else if (this._otherData[1] == at.Woniu && this._levelGO) {
                    let t = this._levelGO.getChildAt(this._otherData[2]);
                    t && (n.Instance.playHit(), t.active = !1), this._otherData.splice(0, 3)
                } else this._otherData[1] == at.Shanhu && this._levelGO && (n.Instance.playHit(), this
                    ._otherData.splice(0, 2));
                if (this._bombData.length > 0 && this._frame == this._bombData[0]) {
                    Laya.timer.once(400, this, () => {
                        n.Instance.playeBomb()
                    });
                    var a = this.getBombAt(this._bombData[1]);
                    a && (a.numChildren > 0 && (a.getChildAt(0).active = !1), a.numChildren > 1 && (a
                        .getChildAt(1).active = !0)), this._bombData.splice(0, 2)
                }
                this._frame++
            }
        }
        getBombAt(t) {
            for (var e = 0, i = 0; i < this.owner.parent.numChildren; i++) {
                var s = this.owner.parent.getChildAt(i);
                if ("Bomb" == s.name) {
                    if (e == t) return s;
                    e++
                }
            }
            return null
        }
        setData(t) {
            this._enemies = t, this._bulletData = o.Instance.bulletData, this._fhData = o.Instance.fhData, this
                ._enemyData = o.Instance.enemyData, this._bombData = o.Instance.bombData, this._otherData = o
                .Instance.otherData, this._actionData = o.Instance.actionData
        }
        playHitRange(t, i) {
            var s = Laya.Sprite3D.instantiate(Laya.Loader.getRes(Yt.getRangHitUrl()));
            Pt.Instance.useSkinId == e.TASK_GUITAR ? (t.y += 1.5, i && (t.y += 2.5, s.transform.scale = new Laya
                    .Vector3(3, 3, 3))) : Pt.Instance.useSkinId == e.TASK_BINGFAZHANG && i && (s.transform
                    .scale = new Laya.Vector3(2.5, 2.5, 2.5)), s.transform.position = t, this.owner.parent
                .addChild(s), Pt.Instance.useSkinId == e.TASK_BINGFAZHANG ? (n.Instance.playFreeze(), s
                    .getChildByName("ice_Fx").active = !1, s.getChildByName("ice_ani").active = !1, s
                    .getChildByName("Boom").active = !0, Laya.timer.once(100, this, () => {
                        n.Instance.playBombIce()
                    })) : Pt.Instance.useSkinId == e.TASK_LEISHENGCHUI ? n.Instance.playLightning() : Pt
                .Instance.useSkinId == e.TASK_GUITAR && (n.Instance.playPiano(), Laya.timer.once(1500, this,
                () => {
                        s.active = !1
                    }))
        }
        onDestroy() {
            Pt.Instance.useSkinId == e.TASK_GUITAR && n.Instance.playGameBgm()
        }
    }
    class T {
        static CurvePoints(t, e = 10) {
            return this.CreateBezierPoints(t, e)
        }
        static CreateBezierPoints(t, e) {
            for (var i = [], s = 0; s < e; s++) {
                var n = this.MultiPointBezier(t, s / e);
                i.push(n)
            }
            return i
        }
        static MultiPointBezier(t, e) {
            for (var i = t.length, s = 0, n = 0, a = 0, o = function(t, e) {
                    for (var i = 1, s = 1; e > 0;) i *= t, s *= e, t--, e--;
                    return i / s
                }, h = 0; h < i; h++) {
                var r = t[h];
                s += r.x * Math.pow(1 - e, i - 1 - h) * Math.pow(e, h) * o(i - 1, h), n += r.y * Math.pow(1 - e, i -
                    1 - h) * Math.pow(e, h) * o(i - 1, h), a += r.z * Math.pow(1 - e, i - 1 - h) * Math.pow(e,
                    h) * o(i - 1, h)
            }
            return {
                x: s,
                y: n,
                z: a
            }
        }
    }
    class k {
        constructor() {}
        static get Instance() {
            return k._ins || (k._ins = new k)
        }
        load() {}
        createLine(t, e) {}
    }
    class E {
        constructor() {
            this._animators = [], this._walkScripts = [], this._currAniName = "", Laya.stage.on(a
                .UNLOCK_WUCAIFENGHUANG, this, this.initWuCaiFenghang), Laya.stage.on(a.CHANGE_GIRL_FACE, this,
                this.initGirl)
        }
        static get Instance() {
            return null == E._ins && (E._ins = new E), E._ins
        }
        init() {
            qt._instance && qt.Instance.stop(), this._playerPos = null, this._fhScript && this._fhScript.destroy(),
                this._girlScript && (this._girlScript.destroy(), this._girlScript = null), Laya.timer.clearAll(
                this);
            let t = D.Instance.scene3d.getChildByName("sunParent");
            t && (t.getChildAt(0).active = !0);
            let i = D.Instance.scene3d.getChildByName("yunParent");
            if (i) {
                let t = i.getChildByName("yun_1"),
                    e = i.getChildByName("yun_2");
                t.active = !0, e.active = !1, e.transform.position = t.transform.position
            }
            let s = D.Instance.scene3d.getChildByName("moonParent");
            s && (s.getChildAt(0).active = !0);
            let n = D.Instance.scene3d.getChildByName("youlingParent");
            if (n) {
                let t = n.getChildAt(0);
                this._youLingInitPos || (this._youLingInitPos = new Laya.Vector3, this._youLingInitPos = t.transform
                    .position.clone()), t.transform.position = this._youLingInitPos.clone(), t.active = !0
            }
            let o = D.Instance.scene3d.getChildByName("boxParent");
            o && (o.getChildAt(0).active = !0, o.getChildAt(1).active = !0);
            let h = D.Instance.scene3d.getChildByName("Moon_2");
            if (h) {
                let t = h.getChildByName("moon").getComponent(Laya.PhysicsCollider);
                t && (t.enabled = !0), h.getChildByName("QX").active = !0
            }
            let r = D.Instance.scene3d.getChildByName("taoxinParent");
            r && (r.getChildByName("taoxin").active = !0);
            let l = D.Instance.scene3d.getChildByName("taoxin_kongParent");
            l && (l.getChildByName("taoxin_kong").active = !0, l.getChildByName("taoxin").active = !1);
            let c = D.Instance.scene3d.getChildByName("lenshenchuiParent");
            c && (c.getChildAt(0).active = !0), this._levelGO = D.Instance.levelGO, Laya.stage.on(a
                    .ZIP_BULLET_SUCCESS, this, this.initWuCaiFenghang), Laya.stage.offAll(a.GAME_START), Laya.stage
                .on(a.GAME_START, this, () => {
                    this.onMouseDown(null), this.initDoor(), this.downJLS(), this.initYun(), this.initYouLing(),
                        this.useWuCaiFengHuang()
                }), Laya.stage.offAll(a.SCENE_OPEN_FOG), Laya.stage.on(a.SCENE_OPEN_FOG, this, t => {
                    this.openFog(t)
                }), Laya.stage.offAll(a.ADD_NEW_BULLET), Laya.stage.on(a.ADD_NEW_BULLET, this, () => {
                    this._levelGO.getChildByName("Main Camera").transform.position = this._camerInitPos, this
                        ._levelGO.getChildByName("Main Camera").transform.rotationEuler = this._camerInitEuler,
                        this.onMouseDown(null)
                }), Laya.stage.offAll(a.CHANGE_BULLET), Laya.stage.on(a.CHANGE_BULLET, this, t => {
                    let i = this._levelGO && this._levelGO.getChildByName("Player_new"),
                        s = i && i.getComponent(Laya.Animator),
                        n = S.Instance.isBullet(Pt.Instance.useSkinId);
                    s && s.play(n ? U.shouqiangready : U.huojiantongready);
                    let a = Yt.bulletUrl(Pt.Instance.useSkinId);
                    Laya.loader.getRes(a) || Laya.loader.create(a, Laya.Handler.create(this, () => {
                            console.log("Finish Loaded Bullet:", Pt.Instance.useSkinId)
                        })), C.clrarData(), !t && e.TASK_RANGE_LIST.indexOf(Pt.Instance.useSkinId) >= 0 && D
                        .Instance.loadLevelRes(Pt.Instance.level, !1)
                }), Laya.stage.offAll(Laya.Event.END), Laya.stage.on(Laya.Event.END, this, () => {
                    D.Instance.resetGame(0)
                }), this.initLevel()
        }
        initLevel() {
            this._animators = [], this._walkScripts = [], C.clrarData(), this._camera = this._levelGO
                .getChildByName("Main Camera");
            let t = this._camera.transform.position;
            this._camera.enableHDR = !1, this._levelGO.getChildByName("ReplayCamera").enableHDR = !1, this._levelGO
                .getChildByName("ReplayCamera").active = !1;
            let i = this._levelGO.getChildByName("Main Camera").transform.rotationEuler;
            this._camerInitPos || (this._camerInitPos = new Laya.Vector3), this._camerInitPos.setValue(t.x, t.y, t
                    .z), this._camerInitEuler || (this._camerInitEuler = new Laya.Vector3), this._camerInitEuler
                .setValue(i.x, i.y, i.z), this._hallCamera = this._camera.clone(), this._hallCamera.name =
                "hallCamera", this._levelGO.addChild(this._hallCamera);
            let s = Pt.Instance.useAIFaceIndex >= 0 || Pt.Instance.drawPoints && Pt.Instance.drawPoints.length > 0;
            if (this._camera.active = !s, this._hallCamera.active = s, this._hallCamera.transform.position =
                new Laya.Vector3(t.x - .4, t.y - 2.8, t.z + 1), this._hallCamera.transform.localRotationEuler =
                new Laya.Vector3(0, 0, 0), Yt.isHai(D.Instance.enterLevel)) {
                this._camera.transform.localRotationEuler;
                this._hallCamera.transform.position = new Laya.Vector3(t.x + 2, 2.2, 7), this._hallCamera.transform
                    .localRotationEuler = new Laya.Vector3(0, -90, 0)
            }
            this.openFog(!1), this._playerGO && (this._playerGO.active = !1, this._playerGO.destroy());
            let n = this._levelGO.getChildByName("Player_new");
            this._playerGO = Laya.Sprite3D.instantiate(Laya.Loader.getRes(Yt.PLAYER_new), this._levelGO), this
                ._playerGO.getComponent(Laya.Rigidbody3D).destroy();
            let h = this._playerGO.getComponent(Laya.PhysicsCollider);
            h && h.destroy(), this._playerGO.name = n.name;
            let r = n.transform.position;
            this._playerGO.transform.position = r;
            let l = n.transform.localRotationEuler;
            this._playerGO.transform.localRotationEuler = new Laya.Vector3(0, l.y + 180, 0), this._playerGO
                .transform.localScale = n.transform.localScale, n.removeSelf(), this._initPlayerEuler = this
                ._playerGO.transform.localRotationEuler.clone(), this._playerPos = this._playerGO.transform.position
                .clone(), this._playerGO.active = !0;
            let c = this._playerGO.getComponent(Laya.Animator),
                _ = S.Instance.isBullet(Pt.Instance.useSkinId);
            c.play(_ ? U.shouqiangready : U.huojiantongready), this.playAni(c), k.Instance.createLine(this
                    ._playerPos.clone(), new Laya.Vector3(this._playerPos.x, this._playerPos.y, this._playerPos.z -
                        30)), this.initWuCaiFenghang(), this.initGirl(), this._bulletSpawn = this._levelGO
                .getChildByName("BulletSpawn").transform, this._HJTSpawn = this._levelGO.getChildByName("HJYSpawn")
                .transform;
            let d, I = -9999;
            for (var m = this._levelGO.getChildByName("Enemies"), y = 0; y < m.numChildren; y++) {
                var L = m.getChildAt(y);
                L.transform.position.y > I && (I = L.transform.position.y);
                let t = !1;
                var p = L.name.startsWith("boss_") ? L.name.substr(5) : L.name;
                L.name.startsWith("eqiup_") && (p = L.name.substr(8), t = !0), p.indexOf(" ") >= 0 && (p = p
                    .substring(0, p.indexOf(" ")));
                let i = L.name.indexOf("boss") >= 0;
                i && (d = i);
                let s = t ? Yt.EQIUP_ENEMY : i ? Yt.BOSS : Yt.ENEMY,
                    n = Laya.Sprite3D.instantiate(Laya.Loader.getRes(s));
                if (m.addChildAt(n, y), n.name = L.name, n.transform.position = L.transform.position, n.transform
                    .rotation = L.transform.rotation, n.transform.localScale = L.transform.localScale, L
                    .removeSelf(), e.TASK_RANGE_LIST.indexOf(Pt.Instance.useSkinId) >= 0) {
                    C.pushEnemy(n);
                    let t = C.getOffEnemyY(!i),
                        e = C.getEnemyRange(!i),
                        s = n.transform.position.y + e.y / 2 + t,
                        a = n.transform.position.x + e.x / 2,
                        o = n.transform.position.z + e.z / 2,
                        h = n.transform.position.x - e.x / 2,
                        r = n.transform.position.y - e.y / 2 + t,
                        l = n.transform.position.z - e.z / 2;
                    C.dcAABB._max.x < a && (C.dcAABB._max.x = a), C.dcAABB._max.y < s && (C.dcAABB._max.y = s), C
                        .dcAABB._max.z < o && (C.dcAABB._max.z = o), C.dcAABB._min.x > h && (C.dcAABB._min.x = h), C
                        .dcAABB._min.y > r && (C.dcAABB._min.y = r), C.dcAABB._min.z > l && (C.dcAABB._min.z = l)
                }
                let a;
                (T = n.getComponent(Laya.Animator)).play(p, 0, 0), this._animators.push(T), n.getChildByName(
                    "dialog_enemy") && (n.getChildByName("dialog_enemy").active = D.Instance.enterLevel <= 2);
                let o = n.getChildByName("feiskin2");
                if (o) {
                    let t = n.name.split("_");
                    t && t.length > 1 && "0" == t[1] && (o.getChildByName("HIT_point_coat").active = !1), t && t
                        .length > 1 && "1" == t[1] && (o.getChildByName("HIT_point_cap").active = !1);
                    let e = o.getComponent(Laya.Animator);
                    e.play(p, 0, 0), this._animators.push(e)
                }
                if ("walk" == p ? a = n.addComponent(g) : "run" == p && (a = n.addComponent(u)), a) {
                    var f = this._levelGO.getChildByName("EnemyPivots").getChildAt(y).transform;
                    a.setPivot(f.position, f.localRotationEulerY >= 0), this._walkScripts.push(a);
                    let t = Laya.Vector3.distance(f.position, n.transform.position);
                    if (e.TASK_RANGE_LIST.indexOf(Pt.Instance.useSkinId) >= 0) {
                        let e = C.getOffEnemyY(!i),
                            s = C.getEnemyRange(!i),
                            n = f.position.x + s.x / 2 + t,
                            a = f.position.y + s.y / 2 + e,
                            o = f.position.z + s.z / 2 + t,
                            h = f.position.x - s.x / 2 - t,
                            r = f.position.y - s.y / 2 + e,
                            l = f.position.z - s.z / 2 - t;
                        C.dcAABB._max.x < n && (C.dcAABB._max.x = n), C.dcAABB._max.y < a && (C.dcAABB._max.y = a),
                            C.dcAABB._max.z < o && (C.dcAABB._max.z = o), C.dcAABB._min.x > h && (C.dcAABB._min.x =
                                h), C.dcAABB._min.y > r && (C.dcAABB._min.y = r), C.dcAABB._min.z > l && (C.dcAABB
                                ._min.z = l)
                    }
                }
            }
            this._yingZiTransform = Laya.Sprite3D.instantiate(Laya.loader.getRes(Yt.YingZi), this._levelGO)
                .transform, this._yingZiTransform.position = new Laya.Vector3(0, I, 0), o.Instance.isBoss = d, o
                .Instance.enemyInfo = {
                    isBoss: d,
                    total: m.numChildren,
                    die: 0
                }, o.Instance.bulletMaxCount = d ? 3 : 1, o.Instance.bulletCount = o.Instance.bulletMaxCount;
            var A = this._levelGO.getChildByName("Civilians");
            if (A && A.numChildren > 0)
                for (y = 0; y < A.numChildren; y++) {
                    var w = A.getChildAt(y);
                    let t = Laya.Sprite3D.instantiate(Laya.Loader.getRes(Yt.CIVILIAN));
                    A.addChildAt(t, y), t.name = w.name, t.transform.position = w.transform.position, t.transform
                        .rotation = w.transform.rotation, t.transform.localScale = w.transform.localScale, w
                        .removeSelf();
                    var T = t.getComponent(Laya.Animator);
                    let e, i = t.name;
                    if (i.indexOf(" ") >= 0 && (i = i.substring(0, i.indexOf(" "))), T.play(i, 0, 0), t
                        .getChildByName("dialog_npc").active = D.Instance.enterLevel <= 2, this._animators.push(T),
                        "walk" == i ? e = t.addComponent(g) : "run" == i && (e = t.addComponent(u)), e) {
                        f = this._levelGO.getChildByName("CivilianPivots").getChildAt(y).transform;
                        e.setPivot(f.position, f.localRotationEulerY >= 0), this._walkScripts.push(e)
                    }
                }
            o.Instance.isStartFighting && Laya.stage.event(a.GAME_START), 0 == D.Instance.enterType && Laya.timer
                .once(2e3, this, () => {
                    D.Instance.preloading(Pt.Instance.level + 1)
                }), Laya.stage.event(a.SCENE_INIT_COMPLET)
        }
        openFog(t) {
            t ? D.Instance.scene3d.enableFog || (D.Instance.scene3d.enableFog = !0, D.Instance.scene3d.fogColor =
                new Laya.Vector3(42 / 255, 222 / 255, 241 / 255), D.Instance.scene3d.fogStart = 10, D.Instance
                .scene3d.fogRange = 40) : D.Instance.scene3d.enableFog && (D.Instance.scene3d.enableFog = !1)
        }
        onMouseDown(t) {
            Laya.timer.clear(this, this.playAni), Gt.Instance.hideUI(nt.SceneLoading), Laya.stage.off(Laya.Event
                    .MOUSE_DOWN, this, this.onMouseDown), n.Instance.playShoot(), o.Instance.bulletCount -= 1, Laya
                .stage.event(a.EVENT_UPDATE_BULLET_COUNT), this._camera.active = !0, this._hallCamera.active = !1,
                this._playerGO.transform.localRotationEuler = new Laya.Vector3(0, (this._initPlayerEuler.y + 180) %
                    360, 0);
            let i = this._playerGO.transform.localRotationEuler.clone();
            this._girlScript && (this._girlScript.rotationEuler = i);
            let s = this._levelGO.getChildByName("Player_new").getComponent(Laya.Animator);
            s.speed = 1;
            let h = S.Instance.isBullet(Pt.Instance.useSkinId);
            s.play(h ? U.shouqiangattack : U.huojiantongattack);
            var r = Laya.Sprite3D.instantiate(Laya.Loader.getRes(Yt.bulletUrl(Pt.Instance.useSkinId)));
            if (r.transform.position = h ? this._bulletSpawn.position : this._HJTSpawn.position, r.transform
                .rotation = h ? this._bulletSpawn.rotation : this._HJTSpawn.rotation, this._bulletScript = r
                .addComponent(Rt), this._levelGO.addChild(r), Pt.Instance.useSkinId == e.WUCAI_FENGHUANG) {
                let t = Laya.Sprite3D.instantiate(Laya.Loader.getRes(Yt.PLAYER_new));
                t.getComponent(Laya.Rigidbody3D).destroy();
                let e = t.getComponent(Laya.PhysicsCollider);
                e && e.destroy(), t.getComponent(Laya.Animator).speed = 0, t.transform.localScale = new Laya
                    .Vector3(.2, .2, .2), t.transform.localPosition = new Laya.Vector3(0, 0, 0), t.transform
                    .localRotationEuler = new Laya.Vector3(0, 180, 0), r.addChild(t)
            }
            e.TASK_RANGE_LIST.indexOf(Pt.Instance.useSkinId);
            let l = Laya.Sprite3D.instantiate(Laya.Loader.getRes(h ? Yt.FIRE_BULLET : Yt.FIRE_HJT)),
                c = h ? new Laya.Vector3(this._bulletSpawn.position.x, this._bulletSpawn.position.y, this
                    ._bulletSpawn.position.z) : new Laya.Vector3(this._HJTSpawn.position.x, this._HJTSpawn.position
                    .y, this._HJTSpawn.position.z);
            l.transform.position = c, this._levelGO.addChild(l);
            var _ = this._levelGO.getChildByName("Enemies");
            w.ENEMY_POSITIONS = [];
            for (var d = 0; d < _.numChildren; d++) {
                var g = _.getChildAt(d).transform;
                w.ENEMY_POSITIONS.push(g.position.clone())
            }
            var u = this._levelGO.getChildByName("Civilians");
            if (u && u.numChildren > 0) {
                w.CIVILIAN_POSITIONS = [];
                for (d = 0; d < u.numChildren; d++) {
                    g = u.getChildAt(d).transform;
                    w.CIVILIAN_POSITIONS.push(g.position.clone())
                }
            }
            var I = 1 / Rt.RECORD_FRAME_INTERVAL;
            for (d = 0; d < this._animators.length; d++) this._animators[d].speed = I;
            for (d = 0; d < this._walkScripts.length; d++) this._walkScripts[d].speed *= I;
            o.Instance.maxHight = 0, Mt.Instance.clearData()
        }
        useWuCaiFengHuang() {
            Pt.Instance.useSkinId == e.WUCAI_FENGHUANG && (this._playerGO && (this._playerGO.active = !1), this
                ._fhScript && this._fhScript.owner && (this._fhScript.owner.active = !1, this._fhScript.stop(),
                    this._fhScript.enabled = !1))
        }
        initDoor() {
            let t = this;
            if (Laya.loader.getRes(Yt.DOOR)) {
                let t = Laya.Sprite3D.instantiate(Laya.loader.getRes(Yt.DOOR));
                D.Instance.levelGO.addChild(t);
                let e = D.Instance.scene3d.getChildByName("doorPos").transform.position;
                t.transform.position = e.clone()
            } else Laya.loader.create(Yt.DOOR, Laya.Handler.create(t, () => {
                t.initDoor()
            }))
        }
        downJLS() {
            I.haveKongtou = !1, this._jlsIns && this._jlsIns.destroy();
            let t = this._levelGO.getChildByName("JLSPoint");
            if (!t) return;
            let e = Pt.Instance.notUnlockSkinList();
            if (!e || 0 == e.length) return;
            o.Instance.haveJLS = !0, I.haveKongtou = !0, n.Instance.playJLS(), this._jlsURL = Math.random() > .5 ?
                Yt.JLS_URL_A : Yt.JLS_URL_B;
            let i = Laya.loader.getRes(this._jlsURL),
                s = this;
            if (i) {
                i.active = !0, this._jlsIns = i.clone(), this._levelGO.addChild(this._jlsIns);
                let e = t.transform.position.y;
                this._jlsIns.transform.position = new Laya.Vector3(t.transform.position.x, e + 5, t.transform
                        .position.z), this._jlsIns.getChildByName("jiangluosan").getComponent(Laya.Animator).speed =
                    0, this._jlsYZTransform = Laya.Sprite3D.instantiate(Laya.loader.getRes(Yt.YingZi), this._jlsIns)
                    .transform, this._jlsYZTransform.position = new Laya.Vector3(this._jlsIns.transform.position.x,
                        this._yingZiTransform.position.y, this._jlsIns.transform.position.z), this._jlsIns
                    .getChildByName("YingZi_JLS").active = !1;
                let s = this._jlsIns.transform.position.y;
                this.JLSFallOff(this._jlsIns, e, s)
            } else Laya.loader.create([s._jlsURL], Laya.Handler.create(s, () => {
                s.downJLS()
            }))
        }
        JLSFallOff(t, e, i) {
            if (!t || !t.parent) return;
            let s = Rt.JLS_SPEED,
                n = new Laya.Vector3(0, s, 0);
            t.transform.translate(n, !1), this._jlsYZTransform.position = new Laya.Vector3(this._jlsYZTransform
                .position.x, this._yingZiTransform.position.y, this._jlsYZTransform.position.z);
            let a = (i - t.transform.position.y) / i * 10;
            this._jlsYZTransform.localScale = new Laya.Vector3(a, a, a), t.transform.position.y > e ? Laya.timer
                .frameOnce(1, this, this.JLSFallOff, [t, e, i]) : t.getChildByName("jiangluosan").getComponent(Laya
                    .Animator).speed = 1
        }
        updatePos(t) {
            if (t) {
                const e = 3;
                let i = this._yingZiTransform.position.y;
                if (this._yingZiTransform.position = new Laya.Vector3(t.x, i, t.z), t.y >= e && 1 != this
                    ._yingZiTransform.localRotationX) this._yingZiTransform.localScale = new Laya.Vector3(1, 1, 1);
                else if (t.y < e && this._yingZiTransform.localRotationX < 2) {
                    let i = 1 + (e - t.y) / e;
                    i = Math.min(2, i), this._yingZiTransform.localScale = new Laya.Vector3(i, i, i)
                }
                this._yingZiTransform.owner.active = t.y >= i
            }
        }
        initYun() {
            let t = D.Instance.scene3d.getChildByName("yunParent");
            t && (this._yun2Transform = t.getChildByName("yun_2").transform, this._yun2Transform.owner.active = !1)
        }
        yunMove() {
            if (!this._yun2Transform) return;
            this._yun2Transform.owner.active = !0;
            let t = this._yun2Transform.position.x,
                e = t - 17,
                i = new Laya.Vector3(e - t, 0, 0);
            Laya.Vector3.normalize(i, i), i.x *= .0125, this.updateYun(t, e, i)
        }
        updateYun(t, e, i) {
            this._yun2Transform.translate(i), this._yun2Transform.position.x >= t ? (i = new Laya.Vector3(e - t, 0,
                    0), Laya.Vector3.normalize(i, i), i.x *= .0125) : this._yun2Transform.position.x <= e && (i =
                    new Laya.Vector3(t - e, 0, 0), Laya.Vector3.normalize(i, i), i.x *= .0125), this._yun2Transform
                .owner.active && Laya.timer.frameOnce(1, this, this.updateYun, [t, e, i])
        }
        initYouLing() {
            let t = D.Instance.scene3d.getChildByName("youlingParent");
            if (!t) return;
            let e = t.getChildByName("boss_youling").transform,
                i = e.position.y,
                s = i - 20,
                n = new Laya.Vector3(0, s - i, 0);
            Laya.Vector3.normalize(n, n), n.x *= .025, this.updateYouLing(e, i, s, n)
        }
        updateYouLing(t, e, i, s) {
            t.translate(s);
            let n = 1;
            t.position.y >= e ? (s = new Laya.Vector3(0, i - e, 0), Laya.Vector3.normalize(s, s), s.y *= .025, n =
                60) : t.position.y <= i && (s = new Laya.Vector3(0, e - i, 0), Laya.Vector3.normalize(s, s), s
                .y *= .025, n = 60), t.owner.active && Laya.timer.frameOnce(n, this, this.updateYouLing, [t, e,
                i, s
            ])
        }
        initWuCaiFenghang() {
            if (!Pt.Instance.isSkinUnlock(e.WUCAI_FENGHUANG)) return;
            if (!Yt.isLoadServerBullet && Yt.isServerBullet(e.WUCAI_FENGHUANG)) return;
            let t = this.playerPos.clone(),
                i = this,
                s = Yt.bulletUrl(e.WUCAI_FENGHUANG);
            if (Laya.loader.getRes(s)) {
                let e = Laya.Sprite3D.instantiate(Laya.loader.getRes(s));
                D.Instance.levelGO.addChild(e), e.transform.position = new Laya.Vector3(t.x, t.y + 3, t.z - 1), this
                    ._fhScript = e.addComponent(y), this._fhScript.setPivot(new Laya.Vector3(t.x, t.y, t.z), !1)
            } else Laya.loader.create(s, Laya.Handler.create(i, () => {
                i.initWuCaiFenghang()
            }))
        }
        initGirl() {
            if (Pt.Instance.useAIFaceIndex < 0 && (!Pt.Instance.drawPoints || 0 == Pt.Instance.drawPoints.length)) {
                let t = Yt.GirlURL();
                return void(Laya.loader.getRes(t) || Laya.loader.create(t, Laya.Handler.create(this, () => {
                    console.log("---Loading Girl Success---")
                })))
            }
            if (this._girlScript) return void this._girlScript.refreshFace();
            let t = Yt.GirlURL();
            if (Laya.loader.getRes(t)) {
                let e = Laya.Sprite3D.instantiate(Laya.loader.getRes(t)),
                    i = !1;
                e.transform.position = new Laya.Vector3(this._playerPos.x - (i ? 2 : .8), this._playerPos.y, this
                        ._playerPos.z), Yt.isHai(D.Instance.enterLevel) && (e.transform.position = new Laya.Vector3(
                        this._playerPos.x, this._playerPos.y, this._playerPos.z - (i ? 2 : .7))), e.transform
                    .localScale = new Laya.Vector3(1, 1, 1);
                let s = this._playerGO.transform.localRotationEuler;
                e.transform.localRotationEuler = new Laya.Vector3(s.x, s.y, s.z), D.Instance.levelGO.addChild(e),
                    this._girlScript = e.addComponent(p), Gt.Instance.getUI(nt.Game) && Gt.Instance.getUI(nt.Game)
                    .contentPane.visible ? (this._camera.active = !0, this._hallCamera.active = !1) : (this._camera
                        .active = !1, this._hallCamera.active = !0)
            } else Laya.loader.create(t, Laya.Handler.create(this, () => {
                this.initGirl()
            }))
        }
        playAni(t) {
            if (!t) return;
            let e = ["idlea", "idleb"];
            "" == this._currAniName && (this._currAniName = e[1]), this._currAniName = this._currAniName == e[0] ?
                e[1] : e[0], t.play(this._currAniName, 0, 0), Laya.timer.once(5e3, this, this.playAni, [t])
        }
        get yun2Pos() {
            return this._yun2Transform && this._yun2Transform.position || null
        }
        get bulletScript() {
            return this._bulletScript
        }
        get jlsURL() {
            return this._jlsURL
        }
        get playerPos() {
            return this._playerPos
        }
        get fhScript() {
            return this._fhScript
        }
        get camera3d() {
            return this._camera
        }
        clear() {
            this._playerPos = null, this._fhScript && this._fhScript.destroy(), this._girlScript && (this
                ._girlScript.destroy(), this._girlScript = null), Laya.timer.clearAll(this)
        }
    }
    var U, N, v, x;
    ! function(t) {
        t.huojiantongready = "huojiantongready", t.huojiantongattack = "huojiantongattack", t.huojiantongwin =
            "huojiantongwin", t.shouqiangready = "shouqiangready", t.shouqiangattack = "shouqiangattack", t
            .shouqiangwin = "shouqiangwin", t.die_left = "zuodie", t.die_right = "youdie", t.die_front = "qiandie", t
            .die_back = "die", t.die_shit = "babadie", t.die_guiter = "tiaowudie"
    }(U || (U = {}));
    class b {
        constructor() {}
        static isEmpty(t) {
            return null == t || "" === t
        }
    }
    class D {
        constructor() {
            this.sceneURL = "", this.BGName = "", this._enterType = 0
        }
        static get Instance() {
            return null == D._ins && (D._ins = new D), D._ins
        }
        init() {
            this.sceneURL ? (this.scene3d = Laya.loader.getRes(this.sceneURL), Laya.stage.addChildAt(this.scene3d,
                0), this.loadLevelRes(Pt.Instance.level, !1)) : this.loadScene3d(Pt.Instance.level, this.init)
        }
        loadLevelRes(t, e) {
            this._enterLevel = t;
            let i = this,
                s = Yt.getLevelPrefabURL(t),
                n = Laya.loader.getRes(s);
            n ? i.loadLevelResComplet(Laya.Sprite3D.instantiate(n), e, t) : Laya.loader.create([s], Laya.Handler
                .create(i, () => {
                    i.loadLevelRes(t, e)
                }))
        }
        loadLevelResComplet(t, e, i) {
            this.loadScene3d(i, () => {
                if (this.scene3d) {
                    this.scene3d.removeSelf();
                    let t = this.scene3d.getChildByName("levelParent");
                    t && t.destroyChildren()
                }
                this.scene3d = Laya.loader.getRes(this.sceneURL), Laya.stage.addChildAt(this.scene3d, 0),
                    this._levelGO && this._levelGO.destroy(), this._levelGO = t, this._levelGO.active = !0,
                    this.scene3d.getChildByName("levelParent").addChild(this._levelGO), e ? A.Instance
                    .replay() : E.Instance.init()
            })
        }
        loadScene3d(t, e, i = "") {
            let s = this,
                n = t >= 1 ? Yt.getLevelPrefabURL(t) : "",
                a = !b.isEmpty(i) || Laya.loader.getRes(n);
            if (a) {
                this.sceneURL = i || this.getSceneURL(a), Laya.loader.getRes(this.sceneURL) ? e && e() : Laya.loader
                    .create([this.sceneURL], Laya.Handler.create(s, () => {
                        e && e(), console.log("scene loaded success!")
                    }))
            } else Laya.loader.create([n], Laya.Handler.create(s, () => {
                s.loadScene3d(t, e)
            }))
        }
        getSceneURL(t) {
            let e = "";
            for (let i = 0; i < t.numChildren; i++) {
                let s = t.getChildAt(i);
                if ("BG_Senlin" == s.name ? (e = Yt.SceneGameURL(1), this.BGName = "Senlin") : "BG_BakedBeach" == s
                    .name ? (e = Yt.SceneGameURL(2), this.BGName = "BakedBeach") : "BG_chenshi" == s.name ? (e = Yt
                        .SceneGameURL(3), this.BGName = "chenshi") : "BG_haidi" == s.name && (e = Yt.SceneGameURL(
                        4), this.BGName = "haidi"), "" != e) break
            }
            return "" == e && console.error("not find sceneURL"), e
        }
        preloading(t) {
            let e = Yt.getLevelPrefabURL(t),
                i = Laya.loader.getRes(e),
                s = this;
            if (i) {
                let t = this.getSceneURL(i);
                Laya.loader.getRes(t) || Laya.loader.create([t], Laya.Handler.create(s, () => {
                    console.log("------preloading ---------------scene success")
                }))
            } else Laya.loader.create([e], Laya.Handler.create(s, () => {
                console.log("-------preloading ------------level success"), Laya.timer.once(6e3, this,
                () => {
                    s.preloading(t)
                })
            }))
        }
        replayLoaded(t) {
            this.loadLevelRes(t > 0 ? t : Pt.Instance.level, !0)
        }
        resetGame(t) {
            this._enterType = t > 0 ? 1 : 0, this.loadLevelRes(t > 0 ? t : Pt.Instance.level, !1)
        }
        get enterType() {
            return this._enterType
        }
        get enterLevel() {
            return this._enterLevel
        }
        get levelGO() {
            return this._levelGO
        }
        removeScene3d() {
            this.scene3d && this.scene3d.parent && this.scene3d.removeSelf(), E.Instance.clear(), this._levelGO &&
                this._levelGO.destroy()
        }
    }
    class G extends Laya.AnimatorStateScript {
        setAnimator(t, e) {
            this._ain = t, this._aniName = e
        }
        onStateEnter() {}
        onStateUpdate() {
            this._aniName == N.paogan && O.Instance.playerScript.updatePaoganLine()
        }
        onStateFail() {
            this._aniName == N.lagan && (Laya.timer.clearAll(this), this._isStop = !0)
        }
        onStateExit() {
            this._aniName == N.paogan ? Laya.timer.frameOnce(4, this, () => {
                O.Instance.playerScript.endPaogan()
            }) : this._aniName == N.lagan && (this._isStop || Laya.timer.frameOnce(10, this, () => {
                this._ain.crossFade(N.lagan, 0)
            }))
        }
    }
    class R extends Laya.Script3D {
        constructor() {
            super(...arguments), this._originY = 0, this._floatInitY = 0, this._suceessDis = 8, this
                ._floatForward = new Laya.Vector3, this._fishStatus = "", this._xuanzhuanCenterPos = new Laya
                .Vector3, this._isFloatDown = !0, this._isShougan = !1, this._throwIndex = 0, this
                ._MeshMoveIndex = 0
        }
        onAwake() {
            this.owner.getChildByName("Dummy001").active = !1, this.owner.getChildByName("Dummy002").active = !
                1, this._handR = this.owner.getChildByName("Bip001").getChildByName("Bip001 Pelvis")
                .getChildByName("Bip001 Spine").getChildByName("Bip001 Spine1").getChildByName("Bip001 Neck")
                .getChildByName("Bip001 R Clavicle").getChildByName("Bip001 R UpperArm").getChildByName(
                    "Bip001 R Forearm").getChildByName("Bip001 R Hand"), this._fishLine = this.owner.parent
                .parent.getChildByName("fishLine"), this._transform = this.owner.transform, this._ani = this
                .owner.getComponent(Laya.Animator), this._aniScript = this._ani.getControllerLayer(0)
                .getAnimatorState(N.paogan).addScript(G), this._aniScript.setAnimator(this._ani, N.paogan), 1 ==
                O.Instance.fishingMapIndex ? this._suceessDis = 8 : 2 == O.Instance.fishingMapIndex ? this
                ._suceessDis = 6 : 3 == O.Instance.fishingMapIndex && (this._suceessDis = 4), this.playAni(N
                    .idle)
        }
        initOriginY(t) {
            this._originY = t
        }
        initPaogan(t) {
            this._paoganGO = t
        }
        startFishing(t, e) {
            let i = new Laya.Vector3;
            this._transform.getForward(i);
            let s = i,
                n = new Laya.Matrix4x4;
            2 == O.Instance.fishingMapIndex && (t *= -1), Laya.Matrix4x4.createRotationY(t * (Math.PI / 180),
                n), Laya.Vector3.transformV3ToV3(s, n, s), Laya.Vector3.normalize(s, s);
            let a = O.Instance.fishingMapIndex,
                o = 1 == a ? 20 : 2 == a ? 30 : 15;
            s.x *= e / 100 * -o, s.z *= o * (e / 100), this._startDir = s, this.startPaogan()
        }
        fishingFail() {
            this._fishStatus = "fail", this._aniScript.onStateFail(), this._shanggouFish && this._shanggouFish
                .fishingFail()
        }
        startPaogan() {
            if (!this._transform) return;
            let t = this,
                e = Laya.loader.getRes(Yt.yuganURL()),
                i = Laya.loader.getRes(Yt.LineURL()),
                s = Laya.loader.getRes(Yt.floatURL());
            if (e && i && s) {
                this._lineIns = Laya.Sprite3D.instantiate(i), this._yugan = Laya.Sprite3D.instantiate(e);
                let t = Pt.Instance.useYuganIndex;
                for (let e = 0; e < 4; e++) this._yugan.getChildByName("diaogan_0" + (1 + e)).active = t == e;
                this._handR.addChild(this._yugan), this._floatIns = Laya.Sprite3D.instantiate(s), this
                    ._yuganLinePointTra = this._yugan.getChildByName("LinePoint").transform, this.playFloat(
                        null), this.playAni(N.idle), Laya.timer.once(200, this, () => {
                        this.fishPaogan(), this.playAni(N.paogan)
                    })
            } else Laya.loader.create([Yt.yuganURL(), Yt.LineURL(), Yt.floatURL()], Laya.Handler.create(t,
        () => {
                t.startPaogan()
            }))
        }
        playAni(t, e = 1) {
            this._ani.speed = e, this._ani.play(t)
        }
        endPaogan() {
            if (-1 == this._throwIndex) {
                let t = this._yuganLinePointTra.position,
                    e = this.getStartPos();
                this._floatIns.transform.position = new Laya.Vector3(e.x, e.y, e.z), this.createLine(new Laya
                    .Vector3(t.x, t.y, t.z), this._floatIns.transform.position.clone())
            }
        }
        updatePaoganLine() {
            this.createLine(this._yuganLinePointTra.position.clone(), this._floatIns.transform.position.clone())
        }
        fishPaogan() {
            let t = new Laya.Vector3(this.pos.x, this.pos.y + .6, this.pos.z);
            this._fishLine.addChild(this._floatIns), this._floatIns.transform.position = t;
            let e = this.getStartPos(),
                i = new Array;
            i.push(t), i.push(new Laya.Vector3(t.x, t.y + 3, t.z + (e.z - t.z) / 2)), i.push(e);
            let s = T.CurvePoints(i, 20);
            this._throwIndex = 0, this.nextThrowPoint(s)
        }
        throwFloat() {
            let t = this._linePointPos,
                e = this._linePointList,
                i = this._floatIns.transform.position;
            if (Laya.Vector3.distance(t, i) < .5) this.nextThrowPoint(e);
            else {
                let s = new Laya.Vector3;
                Laya.Vector3.subtract(t, i, s), Laya.Vector3.normalize(s, s), Laya.Vector3.scale(s, .5, s), Laya
                    .Vector3.add(i, s, s), this._floatIns.transform.position = s, this.createLine(this
                        ._yuganLinePointTra.position, s), Laya.timer.frameOnce(1, this, this.throwFloat, [e, t])
            }
        }
        nextThrowPoint(t) {
            let e = null;
            if (this._throwIndex < t.length) {
                let i = t[this._throwIndex];
                i && (e = new Laya.Vector3(i.x, i.y, i.z))
            }
            if (this._throwIndex++, e && this._throwIndex < t.length) this._linePointList = t, this
                ._linePointPos = e, this.throwFloat();
            else {
                console.log("this._throwIndex++"), this._throwIndex = -1;
                let t = this._yuganLinePointTra.position,
                    e = this.getStartPos();
                this._floatIns.transform.position = new Laya.Vector3(e.x, e.y, e.z), this._floatInitY = this
                    ._floatIns.transform.position.y, this.createLine(new Laya.Vector3(t.x, t.y, t.z), this
                        ._floatIns.transform.position.clone()), this._fishStatus = "paogan", O.Instance
                    .fishingCameraScript.startFishing(this._floatIns.transform.position.clone()), this
                    .playFloat(["luoshui"]), Laya.timer.once(500, this, () => {
                        this.playFloat(["chixu"])
                    }), Laya.timer.once(5e3, this, this.checkFishingRect)
            }
        }
        checkFishingRect() {
            if ("paogan" == this._fishStatus) {
                if (!O.Instance.fishingRect()) return;
                console.log("fishing fail"), _.show("The fish was run out!"), Laya.stage.event(a.EVENT_FISHING_FAIL)
            }
        }
        createLine(t, e) {
            let i = this._fishLine.numChildren;
            if (i > 0)
                for (let t = i - 1; t >= 0; t--) "newLine" == this._fishLine.getChildAt(t).name && this
                    ._fishLine.getChildAt(t).destroy();
            let s = [t, e];
            for (let t = 0; t < s.length - 1; t++) {
                let e = this._lineIns.clone();
                e.name = "newLine";
                let i = new Laya.Vector3(s[t].x, s[t].y, s[t].z),
                    n = new Laya.Vector3(s[t + 1].x, s[t + 1].y, s[t + 1].z);
                e.transform.position = i;
                let a = Laya.Vector3.distance(i, n);
                e.transform.localScale = new Laya.Vector3(1, 1, 100 * -a), e.transform.lookAt(n, new Laya
                    .Vector3(0, 1, 0), !1), this._fishLine.addChild(e)
            }
        }
        getRandomPos() {
            let t = new Laya.Vector3;
            return t.y = this._originY + .6, t.x = this.pos.x + 10 * Math.random() * (Math.random() > .5 ? 1 : -
                1), t.z = this.pos.z + 10 * Math.random() * (Math.random() > .5 ? -1 : 1), t
        }
        getStartPos() {
            let t = new Laya.Vector3,
                e = new Laya.Vector3;
            return this._transform.getForward(e), 1 == O.Instance.fishingMapIndex ? (t.y = this._originY + .6, t
                    .x = this.pos.x + this._startDir.x, t.z = this.pos.z + this._startDir.z) : 2 == O.Instance
                .fishingMapIndex ? (t.y = this._originY + .2, t.x = this.pos.x - e.x * this._startDir.x, t.z =
                    this.pos.z - e.z * this._startDir.z) : 3 == O.Instance.fishingMapIndex && (t.y = this
                    ._originY + .2, t.x = this.pos.x - this._startDir.x, t.z = this.pos.z - this._startDir.z), t
        }
        shouganLogic(t) {
            this._floatIns && this._floatIns.transform && (this._isShougan = t, this._isShougan ? this
                .updateFloatForward() : Laya.Vector3.scale(this._floatForward, -.2, this._floatForward))
        }
        fishShanggou() {
            this.playAni(N.lagan), this.playFloat(["shanggou"]), this._floatIns.transform.position = new Laya
                .Vector3(this._floatIns.transform.position.x, this._floatIns.transform.position.y - .3, this
                    ._floatIns.transform.position.z);
            let t = this._yuganLinePointTra.position;
            this.createLine(t, this._floatIns.transform.position.clone()), Laya.stage.event(a
                .EVENT_START_SHOUGAN)
        }
        onUpdate() {
            if (this._floatIns && this._floatIns.transform && "win" != this._fishStatus)
                if (this._shanggouFish || !O.Instance.fishList || "paogan" != this._fishStatus || O.Instance
                    .fishingCameraScript.playStartAni) {
                    if ("lagan" == this._fishStatus) {
                        if (Laya.Vector3.distance(this._floatIns.transform.position, this.pos) > this
                            ._suceessDis) {
                            if (this._shanggouFish.isFllowMove) {
                                this._floatForward.y = .02 * (this._isFloatDown ? 1 : -1), this._floatIns
                                    .transform.position.y >= this._floatInitY ? this._isFloatDown = !1 : this
                                    ._floatIns.transform.position.y <= this._floatInitY - .3 && (this
                                        ._isFloatDown = !0), this._isShougan && this._shanggouFish.startShougan(
                                        this._floatIns.transform), this._shanggouFish.fishingRunAway(!this
                                        ._isShougan);
                                let t = new Laya.Vector3;
                                Laya.Vector3.add(this._floatIns.transform.position, this._floatForward, t), this
                                    ._floatIns.transform.position = t, O.Instance.fishingCameraScript
                                    .followFish(this._floatIns.transform.position.clone());
                                let e = this._yuganLinePointTra.position;
                                this.createLine(e, this._floatIns.transform.position.clone())
                            }
                        } else {
                            this._fishStatus = "xuanzhuan", this._ani.speed = 0;
                            let t = new Laya.Vector3;
                            this._floatIns.transform.position = new Laya.Vector3(this._floatIns.transform
                                .position.x, this._floatInitY, this._floatIns.transform.position.z);
                            let e = this._floatIns.transform.position;
                            Laya.Vector3.subtract(this.pos, e, t), Laya.Vector3.normalize(t, t), this
                                ._xuanzhuanCenterPos = new Laya.Vector3(e.x + t.x, e.y, e.z + t.z), Gt.Instance
                                .hideUI(nt.Fishing), Laya.timer.once(1500, this, () => {
                                    this._fishStatus = "win", this.playFloat(["qigou"]), this.fishWin()
                                })
                        }
                    } else if ("xuanzhuan" == this._fishStatus) {
                        this.moveCircle(.5, this._xuanzhuanCenterPos, 15);
                        let t = this._yuganLinePointTra.position;
                        this.createLine(t, this._floatIns.transform.position.clone())
                    } else if ("fail" == this._fishStatus) {
                        let t = this._yuganLinePointTra.position;
                        this.createLine(t, this._floatIns.transform.position.clone())
                    }
                } else {
                    let t = O.Instance.fishList,
                        e = 9999,
                        i = this._floatIns.transform.position;
                    for (let s = 0; s < t.length; s++) {
                        let n = t[s],
                            a = Laya.Vector3.distance(i, n.pos);
                        a <= R.FISHING_RECT_NUM && a < e && (e = a, this._shanggouFish = n)
                    }
                    this._shanggouFish && (this._shanggouFish.startShougan(this._floatIns.transform), this
                        .updateFloatForward(), Laya.Vector3.scale(this._floatForward, -.2, this
                            ._floatForward), this._aniScript = this._ani.getControllerLayer(0)
                        .getAnimatorState(N.lagan).addScript(G), this._aniScript.setAnimator(this._ani, N
                            .lagan), this._fishStatus = "lagan")
                }
        }
        moveCircle(t, e, i) {
            let s = new Laya.Vector3;
            Laya.Vector3.subtract(this._floatIns.transform.position, e, s), Laya.Vector3.normalize(s, s);
            let n = new Laya.Matrix4x4;
            Laya.Matrix4x4.createRotationY(i * Math.PI / 180, n), Laya.Vector3.transformV3ToV3(s, n, s);
            let a = new Laya.Vector3;
            Laya.Vector3.scale(s, t, a), Laya.Vector3.add(e, a, a), this._floatIns.transform.position = a
        }
        updateFloatForward() {
            if (!this._floatIns || !this._floatIns.transform) return;
            let t = this._floatIns.transform.position;
            Laya.Vector3.subtract(this.pos, t, this._floatForward), Laya.Vector3.normalize(this._floatForward,
                this._floatForward);
            this._floatForward.x *= .06, this._floatForward.y *= 0, this._floatForward.z *= .06
        }
        fishWin() {
            this.playAni(N.win), this._fishLine.destroyChildren(), this._shanggouFish.destroy(), this._yugan
                .destroy(), Laya.timer.once(300, this, () => {
                    O.Instance.fishingCameraScript.playerWin();
                    let t = O.FISH_MESH_MAP[O.Instance.fishingMapIndex],
                        e = Pt.Instance.useYuganIndex,
                        i = e > 0 ? O.YUGAN_LIST[e - 1].ratio : 1,
                        s = O.HIGH_FISH_LIST[O.Instance.fishingMapIndex],
                        n = [];
                    for (let e = 0; e < t.length; e++) - 1 == s.indexOf(t[e]) && n.push(t[e]);
                    let a = null;
                    a = Math.random() < i - 1 + .2 ? s : n;
                    let o = r.randomArray(a);
                    this.winFishMesh(o)
                })
        }
        winFishMesh(t) {
            let e = this,
                i = Yt.fishMeshURL(t),
                s = Laya.loader.getRes(i);
            if (s) {
                let e = Laya.Sprite3D.instantiate(s),
                    i = e.meshRenderer.bounds._boundBox,
                    n = i.max.x - i.min.x,
                    a = e.transform.localScaleX / n,
                    o = 0,
                    h = O.TOTAL_HIGH_FISH_LIST.indexOf(t) >= 0,
                    l = O.FISH_LENGTH_MAP[h ? "high" : "low"];
                o = r.limit(l[0], l[1]), o = Math.floor(100 * o) / 100;
                let c = Math.floor(a * o * 100) / 100;
                e.transform.localScale = new Laya.Vector3(c, c, c), console.log("fishIndex:", t, "fishLength:",
                    n, "logicLength:", c), this.owner.addChild(e), this.fishMeshMoveStart(e, t, c)
            } else Laya.loader.create([i], Laya.Handler.create(e, () => {
                e.winFishMesh(t)
            }))
        }
        fishMeshMoveStart(t, e, i) {
            let s = new Laya.Vector3(0, .6, -1),
                n = new Laya.Vector3(0, 1.5, .3),
                a = new Array;
            a.push(s), a.push(new Laya.Vector3(s.x, s.y + 3, s.z + (n.z - s.z) / 2)), a.push(n);
            let o = T.CurvePoints(a, 20);
            this._MeshMoveIndex = 0, this.nextMeshMovePoint(o, t, e, i)
        }
        fishMeshMove(t, e, i, s, n) {
            let a = i.transform.localPosition;
            if (Laya.Vector3.distance(e, a) < .5) this.nextMeshMovePoint(t, i, s, n);
            else {
                let o = new Laya.Vector3;
                Laya.Vector3.subtract(e, a, o), Laya.Vector3.normalize(o, o), Laya.Vector3.scale(o, .2, o), Laya
                    .Vector3.add(a, o, o), i.transform.localPosition = o, this.createLine(this
                        ._yuganLinePointTra.position, o), Laya.timer.frameOnce(1, this, this.fishMeshMove, [t,
                        e, i, s, n
                    ])
            }
        }
        nextMeshMovePoint(t, e, i, s) {
            let n = null;
            if (this._MeshMoveIndex < t.length) {
                let e = t[this._MeshMoveIndex];
                e && (n = new Laya.Vector3(e.x, e.y, e.z))
            }
            if (this._MeshMoveIndex++, n && this._MeshMoveIndex < t.length) this.fishMeshMove(t, n, e, i, s);
            else {
                console.log("this._MeshMoveIndex++"), e.transform.localPosition = new Laya.Vector3(0, 1, .3);
                let t = O.Instance.surFloatCount;
                Laya.timer.once(1200, this, () => {
                    Gt.Instance.showUI(nt.Diaoyuzhanshi, {
                        fishIndex: i,
                        floatNum: t,
                        logicLength: s
                    })
                })
            }
        }
        playFloat(t) {
            if (this._floatIns && (this._floatIns.getChildByName("luoshui").active = !1, this._floatIns
                    .getChildByName("chixu").active = !1, this._floatIns.getChildByName("shanggou").active = !1,
                    this._floatIns.getChildByName("qigou").active = !1, t && t.length > 0))
                for (let e = 0; e < t.length; e++) this._floatIns.getChildByName(t[e]).active = !0
        }
        get pos() {
            return this._transform.position
        }
        set pos(t) {
            this._transform && (this._transform.position = t)
        }
        get rotation() {
            return this._transform.rotation
        }
        set rotation(t) {
            this._transform.rotation = t
        }
        set rotationEuler(t) {
            this._transform.localRotationEuler = t
        }
        destroy() {
            this._fishStatus = "", this._fishLine.destroyChildren(), Laya.timer.clearAll(this), this.owner && (
                this.owner.active = !1, this.owner.destroy()), super.destroy()
        }
    }
    R.FISHING_RECT_NUM = 1.2,
        function(t) {
            t.idle = "idle", t.lagan = "lagan", t.paogan = "paogan", t.zhuanshen = "zhuanshen", t.win = "win"
        }(N || (N = {}));
    class M extends Laya.Script3D {
        constructor() {
            super(...arguments), this._speed = .01, this._forward = new Laya.Vector3, this._aniName = "", this
                ._isMove = !1, this._isFllowMove = !1
        }
        onAwake() {
            this._transform = this.owner.transform, this._ani = this.owner.getChildByName("fish_0")
                .getComponent(Laya.Animator), this._originPos && this.initOrigin(this._originPos)
        }
        initOrigin(t) {
            this._originPos = t, this._transform && (this.pos = this.getRandomPos(), this._nextPos = this
                .getRandomPos(), this._transform.lookAt(this._nextPos, new Laya.Vector3(0, 1, 0)), this
                .updateForward(), this._isMove = !0, this.playAni(v.you))
        }
        playAni(t, e = 1) {
            this._aniName != t && (this._aniName = t, this._ani.speed = e, this._ani.play(t))
        }
        onUpdate() {
            if (this._isMove)
                if (this._floatTransform) {
                    let t = null;
                    if (this._runAway) {
                        let e = 0,
                            i = 0;
                        1 == O.Instance.fishingMapIndex ? (e = .2, i = .4) : 2 == O.Instance.fishingMapIndex &&
                            (e = -.4, i = -.1), 3 == O.Instance.fishingMapIndex && (e = .2, i = .4), t =
                            new Laya.Vector3(this._floatTransform.position.x - e, this._floatTransform.position
                                .y - Math.abs(i), this._floatTransform.position.z - i)
                    } else {
                        let e = 0;
                        1 == O.Instance.fishingMapIndex ? e = .4 : 2 == O.Instance.fishingMapIndex && (e = -.2),
                            3 == O.Instance.fishingMapIndex && (e = .3), this._transform.lookAt(new Laya
                                .Vector3(this._floatTransform.position.x, this._floatTransform.position.y, this
                                    ._floatTransform.position.z - e), new Laya.Vector3(0, 1, 0)), t = new Laya
                            .Vector3(this._floatTransform.position.x - e, this._floatTransform.position.y - e,
                                this._floatTransform.position.z)
                    }
                    if (Laya.Vector3.distance(this.pos, t) > .1) {
                        let e = this.pos;
                        Laya.Vector3.lerp(e, t, .1, t)
                    } else this._isShanggou || (this._isShanggou = !0, O.Instance.playerScript.fishShanggou()),
                        this._isFllowMove = !0;
                    this.pos = t
                } else {
                    if (Laya.Vector3.distance(this.pos, this._nextPos) <= .1) {
                        this._nextPos = this.getRandomPos(), this._isMove = !1;
                        let t = this._transform.localRotationEuler.clone();
                        this._transform.lookAt(this._nextPos, new Laya.Vector3(0, 1, 0));
                        let e = this._transform.localRotationEuler.y;
                        return this.rotationEuler = t, void this.updateDirection(new Laya.Vector3(t.x, e, t.z))
                    }
                    this._transform.translate(this._forward, !1)
                }
        }
        getRandomPos() {
            let t = new Laya.Vector3;
            return t.y = this._originPos.y, t.x = this._originPos.x + Math.random() * M.RADIUS_NUM * (Math
                .random() > .5 ? 1 : -1), t.z = this._originPos.z + Math.random() * M.RADIUS_NUM * (Math
                .random() > .5 ? -1 : 1), t
        }
        updateForward() {
            this._transform.getForward(this._forward), Laya.Vector3.normalize(this._forward, this._forward),
                this._forward.x *= this._speed, this._forward.y *= this._speed, this._forward.z *= this._speed
        }
        updateDirection(t, e) {
            let i = this._transform.localRotationEuler;
            Laya.Vector3.lerp(i, t, e || .05, i), this._transform.localRotationEuler = i, Math.abs(this
                ._transform.localRotationEuler.y - t.y) >= 2 ? Laya.timer.frameOnce(1, this, this
                .updateDirection, [t]) : (this._isMove = !0, this._transform.lookAt(this._nextPos, new Laya
                .Vector3(0, 1, 0)), this.updateForward())
        }
        startShougan(t) {
            this._floatTransform = t, this.playAni(v.chegan2)
        }
        fishingFail() {
            this._nextPos = this.pos.clone(), this._floatTransform = null
        }
        fishingRunAway(t) {
            if (this._runAway = t, this._runAway) {
                this.playAni(v.you);
                let t = this._transform.localRotationEuler.clone(),
                    e = .1;
                1 == O.Instance.fishingMapIndex ? e = .1 : 2 == O.Instance.fishingMapIndex ? e = -.4 : 3 == O
                    .Instance.fishingMapIndex && (e = .1), this._transform.lookAt(new Laya.Vector3(this.pos.x,
                        this.pos.y, this.pos.z + e), new Laya.Vector3(0, 1, 0));
                let i = this._transform.localRotationEuler.y;
                this.rotationEuler = t, this.updateDirection(new Laya.Vector3(t.x, -i, t.z), .001)
            }
        }
        get pos() {
            return this._transform.position
        }
        set pos(t) {
            this._transform && (this._transform.position = t)
        }
        get rotation() {
            return this._transform.rotation
        }
        set rotation(t) {
            this._transform.rotation = t
        }
        set rotationEuler(t) {
            this._transform.localRotationEuler = t
        }
        get isFllowMove() {
            return this._isFllowMove
        }
        get runAwayDir() {
            return this._runAwayDir
        }
        destroy() {
            this._isFllowMove = !1, Laya.timer.clearAll(this), this.owner && (this.owner.active = !1, this.owner
                .destroy()), super.destroy()
        }
    }
    M.RADIUS_NUM = 2,
        function(t) {
            t.you = "you", t.youzhuan = "youzhuan", t.zuozhuan = "zuozhuan", t.chegan1 = "chegan1", t.chegan2 =
                "chegan2"
        }(v || (v = {}));
    class P extends Laya.Script3D {
        constructor() {
            super(...arguments), this._playStartAni = !1, this._initFieldOfView = 60
        }
        onAwake() {
            this._transform = this.owner.transform, this._initPos = this._transform.position.clone(), this
                ._initEuler = this._transform.localRotationEuler.clone(), this._initFieldOfView = this.owner
                .fieldOfView
        }
        startFishing(t) {
            this._playStartAni = !0, this.startCameraMove(t), Laya.timer.once(1200, this, () => {
                this._playStartAni = !1, Laya.timer.clear(this, this.startCameraMove)
            })
        }
        followFish(t) {
            this._subSrVec || (this._subSrVec = new Laya.Vector3, this._subSrVec.setValue(this.pos.x - t.x, this
                .pos.y - t.y, this.pos.z - t.z)), this.onUpdatePos(t)
        }
        onUpdatePos(t) {
            var e = new Laya.Vector3(t.x + this._subSrVec.x, t.y + this._subSrVec.y, t.z + this._subSrVec.z);
            this.pos = e
        }
        playerWin() {
            this.winCameraMove()
        }
        startCameraMove(t) {
            let e = this.pos,
                i = 0,
                s = 0,
                n = 0;
            if (1 == O.Instance.fishingMapIndex) i = t.x, s = 10.64, n = t.z - 8;
            else if (2 == O.Instance.fishingMapIndex) {
                s = 12;
                let e = O.Instance.playerScript.pos;
                i = this._initPos.x + t.x - e.x, n = this._initPos.z + t.z - e.z
            } else if (3 == O.Instance.fishingMapIndex) {
                s = 12;
                let e = O.Instance.playerScript.pos;
                i = this._initPos.x + 5 + t.x - e.x, n = this._initPos.z + t.z - e.z
            }
            let a = new Laya.Vector3(i, s, n);
            Laya.Vector3.lerp(e, a, .1, e), this.pos = e, Laya.timer.frameOnce(1, this, this.startCameraMove, [
                t])
        }
        winCameraMove() {
            let t = this.pos;
            var e = new Laya.Vector3(-6.7, 6.53, 65.97),
                i = new Laya.Vector3(-12.76, 180, 0);
            if (1 == O.Instance.fishingMapIndex) {
                e = new Laya.Vector3(-6.7, 6.53, 65.97), i = new Laya.Vector3(-12.76, 180, 0);
                let t = this.rotationEuler;
                Laya.Vector3.lerp(t, i, .1, t), this.rotationEuler = t
            } else if (2 == O.Instance.fishingMapIndex) e = new Laya.Vector3(7.8, 7.8, -3.16), i = new Laya
                .Vector3(0, -120, 0), this.owner.fieldOfView = 35;
            else if (3 == O.Instance.fishingMapIndex) {
                e = new Laya.Vector3(-32, 1.5, 6.3);
                let t = this.rotationEuler;
                i = new Laya.Vector3(0, t.y, 0), Laya.Vector3.lerp(t, i, .1, t), this.rotationEuler = t
            }
            Laya.Vector3.lerp(t, e, .1, t), this.pos = t, Laya.timer.frameOnce(1, this, this.winCameraMove)
        }
        get pos() {
            return this._transform.position
        }
        set pos(t) {
            this._transform && (this._transform.position = t)
        }
        get rotation() {
            return this._transform.rotation
        }
        set rotation(t) {
            this._transform.rotation = t
        }
        get rotationEuler() {
            return this._transform.localRotationEuler
        }
        set rotationEuler(t) {
            this._transform.localRotationEuler = t
        }
        get playStartAni() {
            return this._playStartAni
        }
        clear() {
            this.owner.fieldOfView = this._initFieldOfView, this._subSrVec = null, this._playStartAni = !1, Laya
                .timer.clearAll(this), this.pos = this._initPos, this.rotationEuler = this._initEuler
        }
        destroy() {
            Laya.timer.clearAll(this), this.owner && (this.owner.active = !1, this.owner.destroy()), super
                .destroy()
        }
    }
    class O {
        constructor() {
            Laya.stage.on(a.EVENT_START_FISHING, this, this.startFishing), Laya.stage.on(a.EVENT_FISHING_SHOUGAN,
                this, this.shouganLogic), Laya.stage.on(a.EVENT_FISHING_FAIL, this, this.fishingFail)
        }
        static get Instance() {
            return null == O._ins && (O._ins = new O), O._ins
        }
        goFishing(t, e = !1) {
            this.clearFish(), this._fishingMapIdex = t, e && (this._surFloatCount = O.FLOAT_COUNT), this
                ._surFloatCount--, Laya.stage.offAll(a.SCENE_INIT_COMPLET), Laya.stage.on(a.SCENE_INIT_COMPLET,
                    this, this.enterFinish), Gt.Instance.showUI(nt.SceneLoading), D.Instance.loadScene3d(-1, this
                    .enterFinish.bind(this), Yt.fishingSceneURL())
        }
        enterFinish() {
            Laya.stage.off(a.SCENE_INIT_COMPLET, this, this.enterFinish), Gt.Instance.hideUI(nt.Hall), Gt.Instance
                .hideUI(nt.Dituxuanze), Gt.Instance.hideUI(nt.SceneLoading), D.Instance.removeScene3d(), V.Instance
                .removeScene3d(), this._scene3d && this._scene3d.removeSelf(), this._scene3d = Laya.loader.getRes(Yt
                    .fishingSceneURL()), Laya.stage.addChildAt(this._scene3d, 0), this._fishGO && (this._fishGO
                    .getChildByName("fishingPos").destroyChildren(), this._fishGO.getChildByName("fishParent")
                    .destroyChildren());
            for (let t = 1; t < 4; t++) {
                let e = this._scene3d.getChildByName("Main Camera0" + t);
                e.active = !1;
                let i = this._scene3d.getChildByName("fish0" + t);
                i.active = !1, this._fishingMapIdex == t && (this._fishingCameraScript = e.addComponent(P), e
                    .active = !0, this._fishGO = i, this._fishGO.active = !0)
            }
            let t = this._fishGO.getChildByName("fishingPos");
            t.destroyChildren();
            let e = Laya.Sprite3D.instantiate(Laya.Loader.getRes(Yt.PLAYER_new), t);
            this._playerScript = e.addComponent(R), e.transform.localPosition = new Laya.Vector3(0, 0, 0), e
                .transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
            let i = this._fishGO.getChildByName("fishParent");
            i.destroyChildren(), this._playerScript.initOriginY(i.transform.position.y), this._playerScript
                .initPaogan(this._fishGO.getChildByName("startPaogan"));
            let s = this._fishGO.getChildByName("fishRect");
            s.active = !1, this.initFish(i, s), Gt.Instance.showUI(nt.Fishing)
        }
        initFish(t, e) {
            let i = this,
                s = Yt.fishURL(),
                n = Laya.loader.getRes(s);
            if (n) {
                this._fishScriptList = [];
                for (let i = 0; i < e.numChildren; i++) {
                    let s = e.getChildAt(i);
                    for (let e = 0; e < 5; e++) {
                        let e = Laya.Sprite3D.instantiate(n);
                        t.addChild(e);
                        let i = e.addComponent(M);
                        i.initOrigin(s.transform.position.clone()), this._fishScriptList.push(i)
                    }
                }
            } else Laya.loader.create([s], Laya.Handler.create(i, () => {
                i.initFish(t, e)
            }))
        }
        startFishing(t) {
            this.playerScript.startFishing(t.angle, t.energy)
        }
        shouganLogic(t) {
            this.playerScript.shouganLogic(t.isShougan)
        }
        fishingFail() {
            Gt.Instance.hideUI(nt.Fishing), this.playerScript.fishingFail(), Laya.timer.once(1200, this, () => {
                this.surFloatCount > 0 ? this.goFishing(this.fishingMapIndex) : (V.Instance.goJiayuan(),
                    Laya.timer.frameOnce(5, this, () => {
                        Gt.Instance.showUI(nt.Dituxuanze)
                    }))
            })
        }
        fishingRect() {
            return this._fishGO && this._fishGO.getChildByName("fishRect")
        }
        get fishingCameraScript() {
            return this._fishingCameraScript
        }
        get playerScript() {
            return this._playerScript
        }
        get fishList() {
            return this._fishScriptList
        }
        get surFloatCount() {
            return this._surFloatCount
        }
        get fishingMapIndex() {
            return this._fishingMapIdex
        }
        clearFish() {
            if (this._fishingCameraScript && this._fishingCameraScript.clear(), this._playerScript && this
                ._playerScript.destroy(), this._playerScript = null, this._fishScriptList && this._fishScriptList
                .length > 0)
                for (let t = 0; t < this._fishScriptList.length; t++) this._fishScriptList[t].destroy();
            this._fishScriptList = null
        }
        removeScene3d() {
            this.clearFish(), this._scene3d && this._scene3d.parent && this._scene3d.removeSelf()
        }
    }
    O.FISH_MESH_LIST = [{
            url: "ui://76nl9vqqpkk83g",
            name: "ui://76nl9vqqq1hu7l"
        }, {
            url: "ui://76nl9vqqpkk83f",
            name: "ui://76nl9vqqq1hu7f"
        }, {
            url: "ui://76nl9vqqpkk83e",
            name: "ui://76nl9vqqq1hu7e"
        }, {
            url: "ui://76nl9vqqpkk83d",
            name: "ui://76nl9vqqq1hu7d"
        }, {
            url: "ui://76nl9vqqpkk83c",
            name: "ui://76nl9vqqq1hu7c"
        }, {
            url: "ui://76nl9vqqpkk83b",
            name: "ui://76nl9vqqq1hu7b"
        }, {
            url: "ui://76nl9vqqpkk83a",
            name: "ui://76nl9vqqq1hu7a"
        }, {
            url: "ui://76nl9vqqpkk839",
            name: "ui://76nl9vqqq1hu79"
        }, {
            url: "ui://76nl9vqqpkk838",
            name: "ui://76nl9vqqq1hu78"
        }, {
            url: "ui://76nl9vqqpkk837",
            name: "ui://76nl9vqqq1hu7k"
        }, {
            url: "ui://76nl9vqqpkk836",
            name: "ui://76nl9vqqq1hu7j"
        }, {
            url: "ui://76nl9vqqpkk835",
            name: "ui://76nl9vqqq1hu7i"
        }, {
            url: "ui://76nl9vqqpkk834",
            name: "ui://76nl9vqqq1hu7h"
        }, {
            url: "ui://76nl9vqqpkk833",
            name: "ui://76nl9vqqq1hu7g"
        }], O.FLOAT_COUNT = 3, O.FISHING_TILI = 3, O.tili_time = 36e5, O.FISH_MESH_MAP = {
            1: [1, 5, 2, 3],
            2: [6, 10, 4, 7],
            3: [9, 12, 13, 8, 11, 14]
        }, O.HIGH_FISH_LIST = {
            1: [2, 3],
            2: [4, 7],
            3: [8, 11, 14]
        }, O.TOTAL_LOW_FISH_LIST = [1, 5, 6, 9, 10, 12, 13], O.TOTAL_HIGH_FISH_LIST = [2, 3, 4, 7, 8, 11, 14], O
        .FISH_LENGTH_MAP = {
            low: [.5, 1.2],
            high: [.8, 3]
        }, O.FISH_PRICE_MAP = {
            low: [20, 50],
            high: [50, 100]
        }, O.FISH_MAP_TILI = {
            1: 1,
            2: 1,
            3: 1
        }, O.YUGAN_LIST = [{
            cost: "500",
            des: "CHANCE PLUS 30%",
            ratio: 1.1
        }, {
            cost: "2000",
            des: "CHANCE PLUS 40%",
            ratio: 1.2
        }, {
            cost: "5000",
            des: "CHANCE PLUS 50%",
            ratio: 1.3
        }], O.VIDEO_ADD_STAR_COIN = 200;
    class B extends Laya.Script3D {
        constructor() {
            super(...arguments), this.FIXED_SPEED = 4 / 60, this._speed = new Laya.Vector3, this._currAniName =
                "", this._canOpenUI = !0
        }
        onAwake() {
            this._transform = this.owner.transform, this._ani = this.owner.getComponent(Laya.Animator), this
                .playAni("idle")
        }
        moveByDir(t) {
            if (0 == t.x && 0 == t.y && 0 == t.z) return;
            this._speed.setValue(t.x, t.y, t.z), Laya.Vector3.scale(this._speed, this.FIXED_SPEED, this._speed),
                V.Instance.jiayuanCamera.upDataCamera(this._speed.clone());
            let e = new Laya.Vector3;
            Laya.Vector3.add(this.pos, this._speed, e), this.pos = e, this.rotationEuler = this
                .getRotationEulerByDir(t)
        }
        getRotationEulerByDir(t) {
            let e = new Laya.Vector3;
            Laya.Vector3.normalize(new Laya.Vector3(t.x, 0, t.z), e);
            let i = new Laya.Vector3(0, 0, 1),
                s = new Laya.Vector3;
            Laya.Vector3.cross(i, e, s);
            let n = Math.acos(Laya.Vector3.dot(i, e));
            return s.y < 0 && (n *= -1), new Laya.Vector3(0, 180 * n / Math.PI, 0)
        }
        nextPos(t) {
            let e = new Laya.Vector3(t.x, t.y, t.z);
            Laya.Vector3.scale(e, 2 * this.FIXED_SPEED, e);
            let i = new Laya.Vector3;
            return Laya.Vector3.add(this.pos, e, i), i
        }
        playAni(t, e = 1) {
            this._currAniName != t && (this._ani.speed = e, this._ani.crossFade(t, 0), this._currAniName = t)
        }
        resetCanOpenUI() {
            Laya.timer.once(2e3, this, () => {
                this._canOpenUI = !0
            })
        }
        onTriggerEnter(t) {
            for (var e = t.owner;;) {
                if (e instanceof Laya.Scene3D) return;
                if ("fishingCollider" == e.name && this._canOpenUI) return this._canOpenUI = !1, V.Instance
                    .clear(), void Gt.Instance.showUI(nt.Dituxuanze);
                if ("shopCollider" == e.name && this._canOpenUI) return this._canOpenUI = !1, V.Instance
                .clear(), void Gt.Instance.showUI(nt.Jiayuanshangdian);
                e = e.parent
            }
        }
        get pos() {
            return this._transform.position
        }
        set pos(t) {
            this._transform && (this._transform.position = t)
        }
        get rotation() {
            return this._transform.rotation
        }
        set rotation(t) {
            this._transform.rotation = t
        }
        set rotationEuler(t) {
            this._transform.localRotationEuler = t
        }
        destroy() {
            this._canOpenUI = !0, Laya.timer.clearAll(this), this.owner && (this.owner.active = !1, this.owner
                .destroy()), super.destroy()
        }
    }
    class F extends Laya.Script3D {
        onAwake() {
            this._transform = this.owner.transform
        }
        upDataCamera(t) {
            let e = this.pos,
                i = new Laya.Vector3(e.x + t.x, e.y + t.y, e.z + t.z);
            Laya.Vector3.add(this.pos, t, i), this.pos = i
        }
        get pos() {
            return this._transform.position
        }
        set pos(t) {
            this._transform && (this._transform.position = t)
        }
        get rotation() {
            return this._transform.rotation
        }
        set rotation(t) {
            this._transform.rotation = t
        }
        get rotationEuler() {
            return this._transform.localRotationEuler
        }
        set rotationEuler(t) {
            this._transform.localRotationEuler = t
        }
        destroy() {
            Laya.timer.clearAll(this), super.destroy()
        }
    }
    class V {
        constructor() {
            this._fishingZip = "", this._downVec3 = new Laya.Vector3, this._moveVec3 = new Laya.Vector3, this
                ._upVec3 = new Laya.Vector3, this._petSprite = new Laya.Sprite3D
        }
        static get Instance() {
            return null == V._ins && (V._ins = new V), V._ins
        }
        goJiayuan() {
            Laya.stage.offAll(a.SCENE_INIT_COMPLET), Laya.stage.on(a.SCENE_INIT_COMPLET, this, this.enterJiayuan),
                Gt.Instance.showUI(nt.SceneLoading), D.Instance.loadScene3d(-1, this.enterJiayuan.bind(this), Yt
                    .jiayuanSceneURL())
        }
        enterJiayuan() {
            Laya.stage.off(a.SCENE_INIT_COMPLET, this, this.enterJiayuan), Gt.Instance.hideUI(nt.Hall), Gt.Instance
                .hideUI(nt.SceneLoading), D.Instance.removeScene3d(), O.Instance.removeScene3d(), this._scene3d &&
                this._scene3d.removeSelf(), this._scene3d = Laya.loader.getRes(Yt.jiayuanSceneURL()), Laya.stage
                .addChildAt(this._scene3d, 0);
            let t = this._scene3d.getChildByName("playerPos");
            t.destroyChildren();
            let e = Laya.Sprite3D.instantiate(Laya.loader.getRes(Yt.YingZi)),
                i = Laya.Sprite3D.instantiate(Laya.Loader.getRes(Yt.PLAYER_new), t);
            i.addChild(e), e.transform.localPosition = new Laya.Vector3(0, 0, 0), this._playerScript = i
                .addComponent(B), i.transform.localPosition = new Laya.Vector3(0, 0, 0), i.transform
                .localRotationEuler = new Laya.Vector3(0, 90, 0), this.resetEvent();
            let s = this._scene3d.getChildByName("Camera");
            this._initCameraPos || (this._initCameraPos = s.transform.position.clone(), this._initCameraEuler = s
                    .transform.localRotationEuler.clone()), s.transform.position = this._initCameraPos.clone(), s
                .transform.localRotationEuler = this._initCameraEuler.clone(), this._cameraScript = s.addComponent(
                    F), Gt.Instance.showUI(nt.FishingHall), this._petSprite.numChildren > 0 && this._petSprite
                .destroyChildren(), this._fhScript && this._fhScript.destroy(), this._petSprite.parent || this
                ._scene3d.addChild(this._petSprite), this.initWuCaiFenghang(), window.qg && "" == this
                ._fishingZip && (this._fishingZip = "startLoad", c.Instance.checkCache(this.loadedFishResZip.bind(
                    this), "LayaScene_Scene_diaoyu.zip"))
        }
        loadedFishResZip() {
            this._fishingZip = "sceneloaded", console.log("fishing scene loaded"), c.Instance.checkCache(this
                .loadedFishingZip.bind(this), "LayaScene_THSS_Fishing_Res.zip")
        }
        loadedFishingZip() {
            this._fishingZip = "finishloaded", console.log("finish loaded")
        }
        resetEvent() {
            Laya.timer.frameLoop(1, this, this.playerMove), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this
                .onMouseDown), this.playerScript.resetCanOpenUI()
        }
        onMouseDown(t) {
            t.stageY < 200 || (Gt.Instance.getUI(nt.FishingHall).rocker.show(!0, t.stageX, t.stageY), this
                ._moveDir = null, this._upVec3.setValue(0, 0, 0), this._moveVec3.setValue(0, 0, 0), this
                ._downVec3.setValue(t.stageY, 0, -t.stageX), Laya.stage.off(Laya.Event.MOUSE_OUT, this, this
                    .onMouseUp), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.stage.off(Laya
                    .Event.MOUSE_MOVE, this, this.onMouseMove), Laya.stage.on(Laya.Event.MOUSE_UP, this, this
                    .onMouseUp), Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), Laya.stage.on(
                    Laya.Event.MOUSE_OUT, this, this.onMouseUp))
        }
        onMouseMove(t) {
            Gt.Instance.getUI(nt.FishingHall).rocker.touchMove(t.stageX, t.stageY), this._moveVec3.setValue(t
                .stageY, 0, -t.stageX);
            let e = new Laya.Vector3;
            Laya.Vector3.subtract(this._moveVec3, this._downVec3, e), Laya.Vector3.normalize(e, e), this._moveDir =
                e
        }
        onMouseUp(t) {
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.stage.off(Laya.Event.MOUSE_OUT, this,
                    this.onMouseUp), Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), this._upVec3
                .setValue(t.stageX, 0, t.stageY), Gt.Instance.getUI(nt.FishingHall).rocker.show(!1), this._moveDir =
                null, this._playerScript.playAni("idle")
        }
        playerMove() {
            if (this._moveDir) {
                let t = this._playerScript.nextPos(this._moveDir);
                this.cameraRay(t) ? (this._playerScript.playAni("zou"), this._playerScript.moveByDir(this
                    ._moveDir)) : this._playerScript.playAni("idle")
            }
        }
        initWuCaiFenghang() {
            if (!Pt.Instance.isSkinUnlock(e.WUCAI_FENGHUANG)) return;
            if (!Yt.isLoadServerBullet && Yt.isServerBullet(e.WUCAI_FENGHUANG)) return;
            let t = this,
                i = Yt.bulletUrl(e.WUCAI_FENGHUANG);
            if (Laya.loader.getRes(i)) {
                let t = Laya.Sprite3D.instantiate(Laya.loader.getRes(i));
                this._petSprite.addChild(t);
                let e = new Laya.Vector3(-10, 1, 5);
                t.transform.position = new Laya.Vector3(e.x, e.y, e.z), t.transform.localScale = new Laya.Vector3(2,
                    2, 2), this._fhScript = t.addComponent(y), this._fhScript.setPivot(new Laya.Vector3(e.x - 1,
                    e.y, e.z), !1)
            } else Laya.loader.create(i, Laya.Handler.create(t, () => {
                t.initWuCaiFenghang()
            }))
        }
        get jiayuanCamera() {
            return this._cameraScript
        }
        get playerScript() {
            return this._playerScript
        }
        get fishingZipLoaded() {
            return "finishloaded" == this._fishingZip
        }
        cameraRay(t) {
            if (this._cameraScript && this._cameraScript.owner) {
                let e = new Laya.HitResult,
                    i = new Laya.Vector3(t.x, t.y, t.z),
                    s = new Laya.Vector3(t.x, t.y - 10, t.z);
                return this._scene3d.physicsSimulation.raycastFromTo(i, s, e), !(!e.succeeded ||
                    "jiayuan_xingzoupian" != e.collider.owner.name)
            }
        }
        clear() {
            this._moveDir = null, this._playerScript && this._playerScript.playAni("idle"), Laya.timer.clearAll(
                    this), Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp), Laya.stage.off(Laya.Event
                    .MOUSE_UP, this, this.onMouseUp), Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove),
                Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown)
        }
        removeScene3d() {
            this.clear(), Gt.Instance.hideUI(nt.FishingHall), this._playerScript && this._playerScript.destroy(),
                this._cameraScript && this._cameraScript.destroy(), this._scene3d && this._scene3d.parent && this
                ._scene3d.removeSelf(), this._fhScript && this._fhScript.destroy(), this._petSprite
                .destroyChildren(), this._petSprite.removeSelf()
        }
    }
    class H extends h {
        constructor() {
            super()
        }
        initUI() {
            if (super.initUI(), this._btnStart = this.contentPane.getChild("n9"), this._pifu = this.contentPane
                .getChild("n0"), this._qiandao = this.contentPane.getChild("n1"), this._zhuanpan = this.contentPane
                .getChild("n2"), this._shizhi = this.contentPane.getChild("n12"), this._caidan = this.contentPane
                .getChild("n16"), this._fenghuang = this.contentPane.getChild("n24"), this._selectMap = this
                .contentPane.getChild("n23"), this._btnRideFH = this.contentPane.getChild("n30"), this._btnHuaban =
                this.contentPane.getChild("n31"), this._btnJiayuan = this.contentPane.getChild("n39"), this
                ._btnHuaban.getChild("n1").visible = !1, this._contorl = this.contentPane.getController("c1"), this
                ._btnJiayuan.getChild("n1").visible = !1, this._btnStart.onClick(this, this.onTouch, [this
                    ._btnStart]), this._pifu.onClick(this, this.onTouch, [this._pifu]), this._qiandao.onClick(this,
                    this.onTouch, [this._qiandao]), this._zhuanpan.onClick(this, this.onTouch, [this._zhuanpan]),
                this._shizhi.onClick(this, this.onTouch, [this._shizhi]), this._caidan.onClick(this, this.onTouch, [
                    this._caidan
                ]), this._fenghuang.onClick(this, this.onTouch, [this._fenghuang]), this._selectMap.onClick(this,
                    this.onTouch, [this._selectMap]), this._btnRideFH.onClick(this, this.onTouch, [this
                ._btnRideFH]), this._btnHuaban.onClick(this, this.onTouch, [this._btnHuaban]), this._btnJiayuan
                .onClick(this, this.onTouch, [this._btnJiayuan]), n.Instance.playGameBgm(), Laya.stage.on(Laya.Event
                    .CLICK, this, this.onClickStage), Laya.stage.on(a.OPENED_CAIDANQIANG, this, this
                    .refreshCaiDanQiangRedPoint), Laya.stage.on(a.UNLOCK_WUCAIFENGHUANG, this, this
                    .refreshFengHuangBtn), e.isDebug) {
                let t = fgui.UIPackage.createObject(e.FGUI_DEBUG_NAME, "btn_Debug");
                this.contentPane.addChild(t), t.x = Laya.stage.width - t.width - 20, t.y = 100, t.onClick(this,
                () => {
                        let t = fgui.UIPackage.createObject(e.FGUI_DEBUG_NAME, "ui_Debug");
                        new d(t), this.contentPane.addChild(t)
                    })
            }
            this._addDesk = this.contentPane.getChild("n49"), this._addDesk.onClick(this, this.showAddToDesk)
        }
        showAddToDesk() {
            window.adsMgr && window.adsMgr.showMoreGame()
        }
        onClickStage() {
            n.Instance.playGameBgm(), Laya.stage.off(Laya.Event.CLICK, this, this.onClickStage)
        }
        firstOpenUI() {
            super.firstOpenUI(), this._nowTime = Kt.now, l.Instance.actionSignUI(), this._contorl.selectedIndex = Pt
                .Instance.signTimes < 7 ? 0 : 1, Gt.Instance.loadPackage2(), this.ttLoad()
        }
        ttLoad() {
            window.qg ? c.Instance.checkCache(this.onLoadBullet.bind(this), "LayaScene_THSS_Bullet_Res.zip") : this
                .loadDaZhao()
        }
        onLoadBullet() {
            if (Yt.isLoadServerBullet) return;
            Yt.isLoadServerBullet = !0, Laya.stage.event(a.ZIP_BULLET_SUCCESS);
            let t = Yt.bulletUrl(Pt.Instance.useSkinId);
            console.log("load bullet url:----", t), Laya.loader.getRes(t) ? Gt.Instance.loadPackageZIP(this
                .startLoadParticle.bind(this)) : Laya.loader.create(t, Laya.Handler.create(this, () => {
                console.log("loaded bullet sucess -----------------"), Gt.Instance.loadPackageZIP(this
                    .startLoadParticle.bind(this))
            }))
        }
        startLoadParticle() {
            c.Instance.checkCache(this.loadZ_ParticleZip.bind(this), "LayaScene_Z_Particle.zip")
        }
        loadZ_ParticleZip() {
            this.loadDaZhao(), c.Instance.checkCache(this.startLoadServerScene.bind(this),
                "LayaScene_Scene_jiayuan.zip")
        }
        startLoadServerScene() {
            this._jiayuaned = !0, console.log("jia yuan loaded !!!!!!"), Yt.isLoadServerScene || c.Instance
                .checkCache(this.sceneHaiLoaded.bind(this), "LayaScene_Scene_Game4.zip")
        }
        sceneHaiLoaded() {
            Yt.isLoadServerScene || (console.log("Server scene Loaded success !!!"), Yt.isLoadServerScene = !0)
        }
        loadDaZhao() {
            let t = Laya.loader.getRes(Yt.qiulongURL()),
                e = this;
            t || Laya.loader.create([Yt.qiulongURL(), Yt.SkillChuiZiURL(), Yt.SkillBingURL(), Yt.SkillGuiterURL()],
                Laya.Handler.create(e, () => {
                    console.log("loaded qiulong!"), Laya.stage.event(a.LOAD_QIULONG_FINISH), e
                        .loadRangHitPart()
                }))
        }
        show(t) {
            super.show({
                    showBanner: !1
                }), Pt.Instance.tempUseSkinId > 0 && Pt.Instance.useSkinId == e.WUCAI_FENGHUANG && (Pt.Instance
                    .useSkinId = Pt.Instance.tempUseSkinId, Pt.Instance.tempUseSkinId = 0), this
                .refreshCaiDanQiangRedPoint(), this.refreshFengHuangBtn(), this.checkSkin()
        }
        refreshFengHuangBtn() {
            this._btnRideFH.visible = Pt.Instance.isSkinUnlock(e.WUCAI_FENGHUANG), this._fenghuang.visible = !this
                ._btnRideFH.visible
        }
        checkSkin() {
            let t = Pt.Instance.useSkinId;
            if (Pt.Instance.isSkinUnlock(t)) return;
            let e = Pt.Instance.getSkinEndTime(t);
            if (e <= 0 || e - Kt.now <= 0) {
                let t = Pt.Instance.skinUnlockList,
                    e = t[t.length - 1];
                Pt.Instance.useSkinId = e, Laya.stage.event(a.REFRESH_SKIN)
            }
        }
        refreshCaiDanQiangRedPoint() {
            let t = Pt.Instance.openedCaiDanQing;
            this._caidan.getChild("n5").visible = 0 == t
        }
        createAdBtn() {
            if (!window.tt) return;
            let t = Ht.Ins.getRandomAdObj();
            t && (this._adBox.getChild("n4").url = t.iconPath), Laya.timer.once(5e3, this, this.createAdBtn)
        }
        showAd() {
            window.tt && window.tt.showMoreGamesModal({
                appLaunchOptions: [{
                    appId: "tta230d48d3d0ac553",
                    query: "id=1",
                    extraData: {}
                }, {
                    appId: "tt04b7720a9b8d609e",
                    query: "id=1",
                    extraData: {}
                }, {
                    appId: "ttb7e2c15f28d861ac",
                    query: "id=1",
                    extraData: {}
                }, {
                    appId: "ttea169cab752c1529",
                    query: "id=1",
                    extraData: {}
                }, {
                    appId: "tt6d551be8f26f92b2",
                    query: "id=1",
                    extraData: {}
                }, {
                    appId: "tt9d44ebf9027e62a6",
                    query: "id=1",
                    extraData: {}
                }]
            })
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnRideFH:
                case this._btnStart:
                    t == this._btnRideFH && (Pt.Instance.tempUseSkinId = Pt.Instance.useSkinId, Pt.Instance
                        .useSkinId = e.WUCAI_FENGHUANG);
                    let i = Yt.bulletUrl(Pt.Instance.useSkinId);
                    if (!Laya.loader.getRes(i)) return void _.show("Load bullet resource");
                    Gt.Instance.showUI(nt.Game), this.hide();
                    break;
                case this._shizhi:
                    Gt.Instance.showUI(nt.Stting);
                    break;
                case this._pifu:
                    Gt.Instance.showUI(nt.Skin);
                    break;
                case this._qiandao:
                    Gt.Instance.showUI(nt.Sign);
                    break;
                case this._zhuanpan:
                    Gt.Instance.showUI(nt.Lottery);
                    break;
                case this._caidan:
                    Gt.Instance.showUI(nt.CaiDan);
                    break;
                case this._gonggao:
                    if (!Gt.Instance.package2loaded) return void _.show("Please wait, loading resource");
                    Gt.Instance.showUI(nt.GongGao);
                    break;
                case this._zhaohui:
                    if (!Gt.Instance.package2loaded) return void _.show("Please wait, loading resource");
                    Gt.Instance.showUI(nt.ZhaoHuiYouXi);
                    break;
                case this._shoucang:
                    if (!Gt.Instance.package2loaded) return void _.show("Please wait, loading resource");
                    Gt.Instance.showUI(nt.Shoucangyouxi);
                    break;
                case this._fenghuang:
                    Gt.Instance.showUI(nt.Fenghuang);
                    break;
                case this._desk:
                    window.tt && window.tt.addShortcut({
                        success: function(t) {
                            console.log("add desk success !")
                        },
                        fail: function(t) {
                            console.log("add desk fail !", t)
                        }
                    });
                    break;
                case this._selectMap:
                    Gt.Instance.showUI(nt.SelectMap);
                    break;
                case this._adBox:
                    this.showAd();
                    break;
                case this._btnHuaban:
                    if (!Yt.isLoadServerBullet) return void _.show("Please wait, loading resource");
                    Gt.Instance.showUI(nt.Huaban);
                    break;
                case this._btnGZ:
                    break;
                case this._btnJiayuan:
                    if (window.qg && !this._jiayuaned) return void _.show("Please wait, loading resource");
                    V.Instance.goJiayuan();
                    break;
                case this._btnBuchang:
            }
        }
        hide() {
            super.hide(), this._adBtn && this._adBtn.hide(), Laya.timer.clearAll(this)
        }
        loadRangHitPart() {
            let t = Laya.loader.getRes(Yt.RangHitBingUrl()),
                e = Laya.loader.getRes(Yt.RangHitLelUrl()),
                i = this;
            t && e || Laya.loader.create([Yt.RangHitBingUrl(), Yt.RangHitLelUrl(), Yt.RangHitGuiterUrl(), Yt
                .RangHitShitlUrl()
            ], Laya.Handler.create(i, () => {
                console.log("loaded loadRangHitPart---bing ")
            }))
        }
    }
    class K {
        constructor() {
            this._codeMap = {}
        }
        static get Instance() {
            return null == K._ins && (K._ins = new K), K._ins
        }
        init() {
            let t = Ht.Ins.getExchangeCode();
            if (this._codeMap = {}, t)
                for (let e in t) {
                    let i = {};
                    i.code = e, i.type = x.vedioTimes, i.skinId = t[e], i.value = 1, this._codeMap[e] = i
                }
        }
        exchangeData(t) {
            return this._codeMap[t]
        }
    }! function(t) {
        t[t.vedioTimes = 1] = "vedioTimes"
    }(x || (x = {}));
    class Y extends h {
        constructor() {
            super()
        }
        initUI() {
            super.initUI(), this._btnClose = this.contentPane.getChild("n1"), this._btnSound = this.contentPane
                .getChild("n2"), this._btnVibrate = this.contentPane.getChild("n3"), this._btnDHM_OK = this
                .contentPane.getChild("n21"), this._txtDHM = this.contentPane.getChild("n24"), this._ani1 = this
                .contentPane.getTransition("t0"), this._ani1.stop(), this._btnClose.onClick(this, this.onTouch, [
                    this._btnClose
                ]), this._btnSound.onClick(this, this.onTouch, [this._btnSound]), this._btnVibrate.onClick(this,
                    this.onTouch, [this._btnVibrate]), this._btnDHM_OK.onClick(this, this.onTouch, [this
                    ._btnDHM_OK]), this.contentPane.getChild("n4").height = Laya.stage.height, this.contentPane
                .getChild("n4").width = Laya.stage.width
        }
        show(t) {
            super.show({
                    showBanner: !0
                }), this._ani1 && this._ani1.play(), this._btnSound.selected = !n.Instance.useSound, this
                ._btnVibrate.selected = !n.Instance.useVibrate
        }
        sendDHM() {
            console.log("DHM:", this._txtDHM.text);
            let t = this._txtDHM.text;
            if (this._txtDHM.text = "", b.isEmpty(t)) return void _.show("Enter Redemption code");
            let i = K.Instance.exchangeData(t);
            if (i) {
                if (x.vedioTimes == i.type) {
                    if (Pt.Instance.isSkinUnlock(parseInt(i.skinId))) _.show(S.Instance.getSkinName(parseInt(i
                        .skinId)) + "Obtained");
                    else {
                        let s = Pt.Instance.getSkinVideoTimes(parseInt(i.skinId)),
                            n = e.CAIDAN_VEDIO_TIMES[parseInt(i.skinId)] || 0;
                        if (Pt.Instance.isUsedExchangeCode(t) || (Pt.Instance.setUsedExChangeCode(t), s += 1, Pt
                                .Instance.setSkinVideoTimes(parseInt(i.skinId), s), Pt.Instance.setCaidanTipsUnlock(
                                    parseInt(i.skinId))), n > 0 && s >= n) return Pt.Instance.setSkinUnlock(
                            parseInt(i.skinId)), Gt.Instance.showUI(nt.CaiDanUnlock, {
                            skinId: parseInt(i.skinId),
                            type: 1
                        }), void Gt.Instance.hideUI(nt.CaiDan);
                        Gt.Instance.showUI(nt.CaiDanTanchuang, {
                            skinId: i.skinId,
                            showModel: !0
                        }), this.hide()
                    }
                }
            } else _.show("Invalid Redemption Code")
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose:
                    this.hide();
                    break;
                case this._btnSound:
                    n.Instance.useSound = !n.Instance.useSound, n.Instance.useSound ? n.Instance.playGameBgm() : n
                        .Instance.stopMusic(), Pt.Instance.saveUserData(e.Local_UseSound, "number", n.Instance
                            .useSound ? 1 : 0, !0), this._btnSound.selected = !n.Instance.useSound;
                    break;
                case this._btnVibrate:
                    n.Instance.useVibrate = !n.Instance.useVibrate, Pt.Instance.saveUserData(e.Local_UseVibrate,
                            "number", n.Instance.useVibrate ? 1 : 0, !0), this._btnVibrate.selected = !n.Instance
                        .useVibrate;
                    break;
                case this._btnDHM_OK:
                    this.sendDHM()
            }
        }
        hide() {
            super.hide(), this._ani1 && this._ani1.stop()
        }
    }
    class q extends fgui.GComponent {
        constructFromXML(t) {
            super.constructFromXML(t), this._levelText = this.getChild("n4").asTextField, Laya.stage.on(a
                .EVENT_UPDATE_LEVEL, this, this.updateLevel), this.updateLevel()
        }
        updateLevel() {
            this._levelText.text = Pt.Instance.level + ""
        }
        setLevel(t) {
            this._levelText.text = t + ""
        }
    }
    q.URL = "ui://lgmuflyqh2s44h";
    class z {
        constructor() {}
        static init(t) {}
        static getARdShareInfo() {
            return {
                title: this.shareTitles[Math.floor(this.shareTitles.length * Math.random())],
                image: this.shareImgs[Math.floor(this.shareImgs.length * Math.random())]
            }
        }
        static getLocalData(t) {
            let e = null;
            return Laya.Browser.onWeiXin ? e = Laya.Browser.window.wx.getStorageSync(t) : (t = this.gameName + "_" +
                t, Laya.LocalStorage.getItem(t) && (e = JSON.parse(Laya.LocalStorage.getItem(t)))), console.log(
                "Retrieve Data----------???", t, "???", e), e
        }
        static setLocalData(t, e) {
            console.log("Access Data----------???", t, "???", e), Laya.Browser.onWeiXin ? Laya.Browser.window.wx
                .setStorageSync(t, e) : e && (t = this.gameName + "_" + t, Laya.LocalStorage.setItem(t, JSON
                    .stringify(e)))
        }
        static initVideoAd() {
            console.log("Initialize The Video Ad----------"), this._Ins && this._Ins.initVideoAd && this._Ins.initVideoAd()
        }
        static initNativeAd() {
            console.log("Initialize Native Ads----------"), this._Ins && this._Ins.initNativeAd && this._Ins.initNativeAd()
        }
        static showBnAd() {
            console.log("Display Banner Ads"), this._Ins && this._Ins.showBnAd && this._Ins.showBnAd()
        }
        static hideBnAd() {
            this._Ins && this._Ins.hideBnAd && this._Ins.hideBnAd()
        }
        static showAVideoAd(t) {
            if (this._Ins && this._Ins.showAVideoAd) return Laya.SoundManager.stopAll(), this._Ins.showAVideoAd(t),
                void Laya.SoundManager.stopMusic;
            t && t(!1)
        }
        static initNativeAdView(t, e) {
            t && (this._Ins ? this._Ins.showNativeAd && (e || (e = !1), this._Ins.showNativeAd(t, e), t.off(Laya
                    .Event.CLICK, this, z.onNativeBtn), t.on(Laya.Event.CLICK, this, z.onNativeBtn)) : t
                .visible = !1)
        }
        static showIntertialAd() {
            this._Ins && this._Ins.showIntertialAd && this._Ins.showIntertialAd()
        }
        static showOpenAds() {
            this._Ins && this._Ins.showOpenAds && this._Ins.showOpenAds()
        }
        static showFullVideoAds(t) {}
        static showBtmGameBox() {}
        static hideBtmGameBox() {}
        static showHGWeb() {}
        static preLoadVideoAd() {}
        static preLoadFullVideoAd() {}
        static upScore(t) {}
        static showRankFoFriends(t) {
            if (Laya.Browser.onWeiXin) {
                let e = t ? "open_friend_rank" : "close_friend_rank";
                Laya.Browser.window.wx.getOpenDataContext().postMessage({
                    method: e
                })
            }
        }
        static requestHttp(t, e, i) {
            var s = "";
            if (e) {
                s = "?";
                var n = [];
                for (var a in e) n.push(a + "=" + e[a]);
                s += n.join("&")
            }
            var o = new Laya.HttpRequest;
            o.http.timeout = 1e4, o.once(Laya.Event.COMPLETE, null, function(t) {
                i && i(JSON.parse(t), null)
            }), o.once(Laya.Event.ERROR, null, function(t) {
                i && i(null, t)
            }), o.on(Laya.Event.PROGRESS, null, function(t) {}), o.send(t + s, "", "get", "text")
        }
        static getADJson() {
            console.log("Get Json Configuration------1111-------"), this._Ins && this._Ins.getAdJson && (console.log(
                "??????json??????------2222-------"), this._Ins.getAdJson())
        }
        static getLocation() {
            console.log("get  get  Location.......")
        }
        static wxShare() {}
        static wxShake() {}
        static onNativeBtn() {
            console.log("Native Ad Click"), this._Ins && this._Ins.reportAdClick && this._Ins.reportAdClick()
        }
        static NativeErrorCB() {
            if (this._Ins) {
                let t = this._Ins.offcitys;
                if (t) {
                    let e = z.userLocation;
                    if (t && "" != e)
                        for (let i = 0; i < t.length; i++) {
                            if (t[i] == e) return console.log("Sao Operation Is Prohibited In This Area: ", e, "list???", t), !1
                        }
                }
                if (this._Ins.isNativeErrorC && this._Ins.isNativeErrorC() && z.isNativeErr) return z
                    .isNativeErr = !1, setTimeout(() => {
                        z.isNativeErr = !0
                    }, 3e4), console.log("The Chance Of A Small Game Being Triggered By A Delay: ----------------------"), z.onNativeBtn(), !0
            }
            return !1
        }
        static isLiuHaiScreen() {
            return Laya.stage.height / Laya.stage.width >= 2 || Laya.stage.height / Laya.stage.width <= .5
        }
        static aNewDay() {
            let t = new Date,
                e = z.getLocalData("date");
            e && e == t.getDate() || (console.log("This Is A New Day------", e, "------"), e = t.getDate(), z.setLocalData(
                "date", e), this._Ins && this._Ins.aNewDay && this._Ins.aNewDay())
        }
    }
    z.shareTitles = ["Fun Game,  Worthy Of Your Challenge !"], z.shareImgs = [""], z.gameName = "lineCared", z.isAddVIVOIcon = !1, z
        .userLocation = "";
    class J extends h {
        constructor() {
            super(), this._loopUnlockIndex = 0, this._modelId = 0, this._modelEuler = new Laya.Vector3
        }
        initUI() {
            super.initUI(), this._btnClose = this.contentPane.getChild("n0"), this._btnVideo = this.contentPane
                .getChild("n11"), this._btnUnlockSkin = this.contentPane.getChild("n5"), this._btnVideoShiyong =
                this.contentPane.getChild("n39"), this._textDownTime = this._btnVideoShiyong.getChild("n3"), this
                ._btnVideo.getChild("n3").text = e.SEE_VIDEO_ADD_GOLD + "", this._skinList = this.contentPane
                .getChild("n3").asList, this._skinList.itemRenderer = Laya.Handler.create(this, this
                    .setSkinItemData, null, !1), this._skinList.on(fgui.Events.CLICK_ITEM, this, this
                    .onClickSkinItem), this._btnClose.onClick(this, this.onTouch, [this._btnClose]), this._btnVideo
                .onClick(this, this.onTouch, [this._btnVideo]), this._btnVideoShiyong.onClick(this, this.onTouch, [
                    this._btnVideoShiyong
                ]), this._btnUnlockSkin.onClick(this, this.onTouch, [this._btnUnlockSkin]), Laya.stage.on(a
                    .REFRESH_SKIN, this, this.refresh), Laya.stage.on(a.ZIP_BULLET_SUCCESS, this, this
                    .refreshBucketModel, [this._modelId])
        }
        show(t) {
            super.show({
                showBanner: !1
            }), this.refresh()
        }
        refresh() {
            this.contentPane.visible && (this.clear(), this._skinList.numItems = e.skinOrderList().length, this
                ._modelId = 0, this.loadScene3d(), this.defaultSelectSkin(), this.refreshUnlockGold(), this
                ._btnVideo.getController("c1").selectedIndex = 0, Laya.timer.clear(this, this.modelRotate), Laya
                .timer.frameLoop(1, this, this.modelRotate))
        }
        loadScene3d() {
            let t = this;
            Laya.Scene3D.load(Yt.SHOP, Laya.Handler.create(this, function(e) {
                t.loadComplet(e)
            }))
        }
        loadComplet(t) {
            this._shopScene = t, this._shopScene.parent || Laya.stage.addChild(t);
            var e = t.getChildByName("Main Camera");
            e && (e.active = !0, e.enableHDR = !1, e.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY), this
                ._skinParent = t.getChildByName("skinParent"), this._skinParent.transform.localScale = new Laya
                .Vector3(6, 6, 6), this._skinParent.transform.rotationEuler = new Laya.Vector3(0, -90, 0), this
                ._skinParent.removeChildren(), this._modelId > 0 && this.refreshBucketModel(this._modelId)
        }
        refreshBucketModel(t) {
            if (this._modelId = t, !this.contentPane.visible || !this._skinParent) return;
            if (!Yt.isLoadServerBullet && Yt.isServerBullet(t)) return;
            if (this._btnVideoShiyong.visible = this._currSelectSkinItem && this._currSelectSkinItem.isShiyong && -
                1 == e.TASK_SKIN_LIST.indexOf(this._currSelectSkinItem.skinId), !this._skinParent) return;
            this._skinParent.removeChildren();
            let i = Yt.bulletUrl(this._modelId);
            if (Laya.loader.getRes(i)) {
                let t = Laya.Sprite3D.instantiate(Laya.loader.getRes(i));
                for (let e = 0; e < t.numChildren; e++) {
                    let i = t.getChildAt(e);
                    if (i.name.indexOf("FX_Trail") >= 0) {
                        i.active = !1;
                        break
                    }
                }
                this._skinParent.addChild(t);
                let e = (z.isLiuHaiScreen(), 4.6);
                t.transform.position = new Laya.Vector3(0, e, 0)
            } else Laya.loader.create(i, Laya.Handler.create(this, () => {
                this.refreshBucketModel(this._modelId)
            }))
        }
        defaultSelectSkin() {
            this._currSelectSkinItem && this._currSelectSkinItem.setControl(0), this._currSelectSkinItem = null;
            for (var t = 0; t < this._skinList.numItems; t++) {
                let e = this._skinList.getChildAt(t);
                if (e.skinId == Pt.Instance.useSkinId) {
                    this._currSelectSkinItem = e;
                    break
                }
            }
            this._currSelectSkinItem || (this._currSelectSkinItem = this._skinList.getChildAt(0)), this
                ._currSelectSkinItem.setControl(1), this._skinList.scrollToView(this._currSelectSkinItem.index),
                this.refreshBucketModel(this._currSelectSkinItem.skinId)
        }
        modelRotate() {
            if (this._skinParent && this._skinParent.numChildren > 0) {
                let t = this._skinParent.getChildAt(0),
                    e = t.transform.rotationEuler.y + .8;
                this._modelEuler.setValue(5, e % 360, 0), t.transform.rotationEuler = this._modelEuler
            }
            this._btnVideoShiyong.visible && (this._textDownTime.text = this._currSelectSkinItem.downTimeText)
        }
        setSkinItemData(t, i) {
            let s = e.ORDER_SKIN_LIST[t],
                n = Ht.Ins.isCheckVersion();
            i.visible = s > 0, n && (i.visible = i.visible && s != e.TASK_GUITAR), s > 0 && i.setData(t, s)
        }
        onClickSkinItem(t) {
            if (t.isUnlock || t.isShiyong) n.Instance.playButton(), this._currSelectSkinItem && this
                ._currSelectSkinItem.setControl(0), this._currSelectSkinItem = t, this._currSelectSkinItem
                .isUnlock ? this._currSelectSkinItem.setControl(1) : this._currSelectSkinItem.setControl(4), Pt
                .Instance.useSkinId = t.skinId, this.refreshBucketModel(t.skinId);
            else {
                if (t.skinId == e.SHARE_SKINID) return void _.show("Share your unlock achievement");
                if (e.KONGTOU_SKIN_LIST.indexOf(t.skinId) >= 0) return void _.show("Chance of getting air supplies");
                if (e.LOTTERY_SKIN_LIST.indexOf(t.skinId) >= 0) Gt.Instance.showUI(nt.Lottery), this.hide();
                else if (e.VIDEO_SKINID.indexOf(t.skinId) >= 0) Gt.Instance.showUI(nt.VidioUnlockSkin), this.hide();
                else if (e.SIGN_SKIN_LIST.indexOf(t.skinId) >= 0) Gt.Instance.showUI(nt.Sign), this.hide();
                else {
                    if (!(e.TASK_SKIN_LIST.indexOf(t.skinId) >= 0)) return Pt.Instance.gold >= this
                        ._currUnlockCost ? void _.show("Not enough gold, click to unlock randomly") : void this.seeAdVidioSkin(t);
                    this.hide(), Gt.Instance.showUI(nt.CaiDan)
                }
            }
        }
        refreshUnlockGold() {
            let t = e.goldUnlockSkinList(),
                i = 0;
            for (let e = 0; e < t.length; e++) Pt.Instance.isSkinUnlock(t[e]) && i++;
            let s = this._btnUnlockSkin.getChild("n6");
            if (s.text = "", i >= t.length) this._btnUnlockSkin.enabled = !1, this._btnUnlockSkin.grayed = !0;
            else {
                if (this._btnUnlockSkin.enabled = !0, this._btnUnlockSkin.grayed = !1, this._currUnlockCost = e
                    .getSkinGoldCost(i), !this._currUnlockCost) return void console.error("Gold Coin Unlocked, Configuration Error");
                s.text = this._currUnlockCost + ""
            }
        }
        unlockSkin() {
            if (!this._currUnlockCost) return void console.error("Gold Coin Unlocked, Configuration Error");
            if (Pt.Instance.gold < this._currUnlockCost) return void _.show("Not enough gold");
            let t = e.goldUnlockSkinList(),
                i = [];
            for (var s = 0; s < this._skinList.numItems; s++) {
                let e = this._skinList.getChildAt(s);
                !e.isUnlock && t.indexOf(e.skinId) >= 0 && i.push(e)
            }
            if (0 == i.length) return;
            if (this._btnUnlockSkin.enabled = !1, this._btnUnlockSkin.grayed = !0, Pt.Instance.changeGold(-this
                    ._currUnlockCost), 1 == i.length) return Pt.Instance.setSkinUnlock(i[0].skinId), void this
                .sendUnlockSkin(i[0]);
            let n = Math.floor(i.length * Math.random());
            Pt.Instance.setSkinUnlock(i[n].skinId), this._loopUnlockIndex = -1, this.loopUnlockSkin(i), Laya.timer
                .once(2500, this, this.sendUnlockSkin, [i[n]])
        }
        loopUnlockSkin(t) {
            this._loopUnlockIndex >= 0 && t[this._loopUnlockIndex].setControl(2), this._loopUnlockIndex++, this
                ._loopUnlockIndex = this._loopUnlockIndex % t.length, t[this._loopUnlockIndex].setControl(3), Laya
                .timer.once(100, this, this.loopUnlockSkin, [t])
        }
        sendUnlockSkin(t) {
            this.hide(), Gt.Instance.showUI(nt.SkinUnlock, {
                skinId: t.skinId
            })
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose:
                    this.hide();
                    break;
                case this._btnUnlockSkin:
                    this.unlockSkin();
                    break;
                case this._btnVideo:
                    this.seeAdVidio();
                    break;
                case this._btnVideoShiyong:
                    if (!this._currSelectSkinItem || !this._currSelectSkinItem.isShiyong || e.TASK_SKIN_LIST
                        .indexOf(this._currSelectSkinItem.skinId) >= 0) return;
                    let i = this;
                    window.adsMgr && window.adsMgr.showVideoAd({
                        success: () => {
                            i.hide(), Pt.Instance.setSkinUnlock(i._currSelectSkinItem.skinId), Pt
                                .Instance.setSkinEndTime(i._currSelectSkinItem.skinId, 0), Gt.Instance
                                .showUI(nt.SkinUnlock, {
                                    skinId: i._currSelectSkinItem.skinId
                                })
                        },
                        fail: () => {}
                    })
            }
        }
        seeAdVidio() {
            var t = this;
            window.adsMgr && window.adsMgr.showVideoAd({
                success: function() {
                    t.getVidioAward(!0)
                },
                fail: function() {}
            })
        }
        getVidioAward(t) {
            t && Gt.Instance.showUI(nt.GoldAni, {
                gold: e.SEE_VIDEO_ADD_GOLD
            })
        }
        seeAdVidioSkin(t) {
            var e = this;
            window.adsMgr && window.adsMgr.showVideoAd({
                success: function() {
                    e.getVidioAwardSkin(!0, t)
                },
                fail: function() {}
            })
        }
        refreshItemsName() {}
        getVidioAwardSkin(t, i) {
            t && (Pt.Instance.changeGold(e.SEE_VIDEO_ADD_GOLD), Pt.Instance.gold >= this._currUnlockCost ? _.show(
                "Not enough gold, click to unlock randomly") : _.show("Receive???" + e.SEE_VIDEO_ADD_GOLD + " Gold"))
        }
        clear() {
            this._modelId = 0, Laya.timer.clearAll(this), this._skinParent && this._skinParent.removeChildren(),
                this._shopScene && this._shopScene.parent && this._shopScene.removeSelf()
        }
        hide() {
            super.hide(), this.clear()
        }
    }
    class j extends fgui.GComponent {
        constructFromXML(t) {
            super.constructFromXML(t), this._control = this.getController("c1"), this._imgLoader = this
                .getChild("n5").asLoader, this._videoIMG = this.getChild("n17").asImage, this
                ._skinNameControl1 = this.getChild("n21").getController("c1"), this._skinNameControl2 = this
                .getChild("n21").getController("c2"), this._getPathControl = this.getChild("n19").getController(
                    "c1"), this._textDownTime = this.getChild("n25").asTextField, Laya.stage.on(a
                    .START_SKIN_SHIYONG, this, this.refresh)
        }
        setControl(t) {
            if (this.isShiyong ? this._control.selectedIndex = 4 : this._control.selectedIndex = t, 4 == this
                ._control.selectedIndex) {
                let t = Pt.Instance.getSkinEndTime(this._skinId);
                "string" == typeof t && (t = parseInt(t)), Laya.timer.clearAll(this), Laya.timer.loop(500, this,
                    this.downTime, [t]), this.downTime(t)
            }
        }
        downTime(t) {
            let e = t - Kt.now;
            e >= 0 ? this._textDownTime.text = Kt.getTimeStr1(e) : (Pt.Instance.setSkinEndTime(this.skinId, 0),
                Laya.timer.clearAll(this), this.setData(this.index, this.skinId))
        }
        setData(t, i) {
            this._index = t, this._skinId = i;
            let s = S.Instance.getSkinUrl(i);
            s && (this._imgLoader.url = s), this._skinNameControl1.selectedIndex = 0, this._skinNameControl2
                .selectedIndex = 0;
            let n = S.Instance.getSkinIndex(i);
            i >= e.BLUE_BINGSHUANG_SKIN ? this._skinNameControl1.selectedIndex = n : this._skinNameControl2
                .selectedIndex = n, this._isUnlock = Pt.Instance.isSkinUnlock(this._skinId), this._isUnlock ?
                this.setControl(0) : this.isShiyong ? this.setControl(4) : Ht.Ins.isShoucangEnter() || this
                .skinId != e.TASK_SHOUCANGZHUANSHU ? (this.setControl(2), this._videoIMG.visible = !0, e
                    .TASK_SKIN_LIST.indexOf(this._skinId) >= 0 ? (this._videoIMG.visible = !1, this
                        ._getPathControl.selectedIndex = 0) : e.SIGN_SKIN_LIST.indexOf(this._skinId) >= 0 ? (
                        this._videoIMG.visible = !1, this._getPathControl.selectedIndex = 6) : e
                    .LOTTERY_SKIN_LIST.indexOf(this._skinId) >= 0 ? this._getPathControl.selectedIndex = 1 : e
                    .SHARE_SKINID == this._skinId ? (this._videoIMG.visible = !1, this._getPathControl
                        .selectedIndex = 2) : e.KONGTOU_SKIN_LIST.indexOf(this._skinId) >= 0 ? (this._videoIMG
                        .visible = !1, this._getPathControl.selectedIndex = 4) : e.VIDEO_SKINID.indexOf(this
                        ._skinId) >= 0 ? (this._videoIMG.visible = !1, this._getPathControl.selectedIndex = 5) :
                    this._getPathControl.selectedIndex = 3) : this.setControl(5)
        }
        refresh() {
            this.setData(this.index, this.skinId)
        }
        get index() {
            return this._index
        }
        get isUnlock() {
            return Pt.Instance.isSkinUnlock(this._skinId)
        }
        get isShiyong() {
            if (this.isUnlock) return !1;
            return Pt.Instance.getSkinEndTime(this._skinId) - Kt.now > 0
        }
        get skinId() {
            return this._skinId
        }
        get downTimeText() {
            return this._textDownTime.text
        }
    }
    j.URL = "ui://lgmuflyqh2s44w";
    class X extends fgui.GComponent {
        constructFromXML(t) {
            super.constructFromXML(t), this._goldText = this.getChild("n2").asTextField, this._changeGoldText =
                this.getChild("n3").asTextField, this._changeGoldText.text = "", Laya.stage.on(a
                    .EVENT_UPDATE_GOLD, this, this.updateGold), this._goldText.text = Pt.Instance.gold + "",
                this._goldNum = Pt.Instance.gold, this.getTransition("t0").stop()
        }
        updateGold() {
            let t = Pt.Instance.gold - this._goldNum,
                e = t + "";
            t > 0 && (e = "+" + t), 0 != t && (this._changeGoldText.text = e, this.getTransition("t0").play()),
                Laya.timer.once(1e3, this, () => {
                    this._goldText.text = Pt.Instance.gold + ""
                }), this._goldNum = Pt.Instance.gold
        }
    }
    X.URL = "ui://lgmuflyqh2s44n";
    class W extends h {
        constructor() {
            super()
        }
        initUI() {
            super.initUI(), this._goldCom = this.contentPane.getChild("n0"), this._goldCom.visible = !1, this
                ._goldAni = this._goldCom.getTransition("t0"), this._goldAni.stop()
        }
        show(t) {
            super.show(), t && t.gold && (this._isPlayAni && this._gold > 0 && (Pt.Instance.changeGold(t.gold), this
                    ._goldCom.visible = !1, this._goldAni.stop()), this._gold = t.gold, this._isPlayAni = !0,
                this._goldCom.visible = !0, this._goldAni.play(Laya.Handler.create(this, () => {
                    Pt.Instance.changeGold(this._gold), this._goldCom.visible = !1, this._isPlayAni = !
                        1, this._gold = 0, this.hide()
                }), 1))
        }
        hide() {
            super.hide()
        }
    }
    class $ extends h {
        constructor() {
            super(), this._receivedImgList = [], this._skinImgList = [], this._lotterySkinId = 0, this
                ._lotteryGold = 0, this._weightList = [50, 100, 150, 150, 250, 300], this._goldIndexList = [3, 4,
                5], this._skinIndexList = [0, 1, 2], this._goldList = [200, 150, 100], this._angle = 60, this
                ._rwardAngleMap = {}, this._isLottery = !1, this._yunsuTime = 1500, this._jiasuTime = 500, this
                ._jiansuTime = 500, this._lotteryTime = 3e3, this._statusMark = "", this._currTime = 0, this
                ._startTime = 0, this._targetRotion = 0
        }
        initUI() {
            super.initUI(), this._btnClose = this.contentPane.getChild("n13"), this._control = this.contentPane
                .getController("c1"), this._whirlCom = this.contentPane.getChild("n1").getChild("n6"), this._bar =
                this.contentPane.getChild("n5").getChild("n1"), this._barTxt = this.contentPane.getChild("n5")
                .getChild("n3"), this._timesTxt = this.contentPane.getChild("n9"), this._btnFree = this.contentPane
                .getChild("n2"), this._btnVideo = this.contentPane.getChild("n14"), this._skinImgList.push(this
                    ._whirlCom.getChild("n8")), this._skinImgList.push(this._whirlCom.getChild("n10")), this
                ._skinImgList.push(this._whirlCom.getChild("n9")), this._receivedImgList.push(this._whirlCom
                    .getChild("n15")), this._receivedImgList.push(this._whirlCom.getChild("n17")), this
                ._receivedImgList.push(this._whirlCom.getChild("n18")), this._rwardAngleMap[e.LOTTERY_SKIN_LIST[
                0]] = 2 * this._angle, this._rwardAngleMap[e.LOTTERY_SKIN_LIST[1]] = 4 * this._angle, this
                ._rwardAngleMap[e.LOTTERY_SKIN_LIST[2]] = 0, this._rwardAngleMap[e.LOTTERY_SKIN_LIST[3]] = 0, this
                ._rwardAngleMap[this._goldList[0]] = 5 * this._angle, this._rwardAngleMap[this._goldList[1]] = 3 *
                this._angle, this._rwardAngleMap[this._goldList[2]] = this._angle;
            for (let t = 0; t < this._receivedImgList.length; t++) this._receivedImgList[t].visible = !1;
            this._btnClose.onClick(this, this.onTouch, [this._btnClose]), this._btnFree.onClick(this, this.onTouch,
                    [this._btnFree]), this._btnVideo.onClick(this, this.onTouch, [this._btnVideo]), this.contentPane
                .getChild("n4").height = Laya.stage.height, this.contentPane.getChild("n4").width = Laya.stage.width
        }
        show(t) {
            super.show({
                    showBanner: !0
                }), this._isLottery = !1, this._btnClose.enabled = !0, this.refreshSkin(), this.refreshBar(), this
                ._btnVideo.getController("c1").selectedIndex = 0, this._btnClose.visible = !0
        }
        refreshSkin() {
            let t = e.LOTTERY_SKIN_LIST,
                i = Pt.Instance.isSkinUnlock(t[t.length - 1]);
            for (let e = 0; e < this._skinImgList.length; e++) {
                let s = i ? t[t.length - 2 - e] : t[t.length - 1 - e];
                this._skinImgList[e].url = S.Instance.getSkinUrl(s), this._receivedImgList[e].visible = Pt.Instance
                    .isSkinUnlock(s)
            }
            i && (Pt.Instance.firstLottery = 1);
            let s = Pt.Instance.firstLottery;
            this._control.selectedIndex = 0 == s ? 1 : 0
        }
        refreshBar() {
            this._timesTxt.text = Math.max(0, 3 - Pt.Instance.seeVideoLotteryTimes) + "", this._bar.value = Math
                .floor(Pt.Instance.seeVideoLotteryTimes / 3 * 100), this._barTxt.text = Pt.Instance
                .seeVideoLotteryTimes + "/3";
            let t = !0,
                i = e.LOTTERY_SKIN_LIST;
            for (let e = 0; e < i.length; e++)
                if (!Pt.Instance.isSkinUnlock(i[e])) {
                    t = !1;
                    break
                } this.contentPane.getChild("n5").visible = !t, this.contentPane.getChild("n12").visible = !t
        }
        startLottery() {
            if (this._isLottery) return void _.show("Please Wait...");
            this._isLottery = !0, this._btnClose.enabled = !1;
            let t = e.LOTTERY_SKIN_LIST,
                i = (Pt.Instance.isSkinUnlock(t[t.length - 1]), Pt.Instance.firstLottery);
            if (this._whirlCom.rotation = this._whirlCom.rotation % 360, this._lotterySkinId = 0, this
                ._lotteryGold = 0, 0 == i) this.randomRward(!0), Pt.Instance.firstLottery = 1, Pt.Instance
                .seeVideoLotteryTimes = 1;
            else if (Pt.Instance.seeVideoLotteryTimes >= 3) {
                for (let e = t.length - 1; e >= 0; e--)
                    if (!Pt.Instance.isSkinUnlock(t[e])) {
                        this._lotterySkinId = t[e];
                        break
                    } 0 == this._lotterySkinId && this.randomRward(!0)
            } else this.randomRward(!0);
            let s = 0;
            this._lotterySkinId > 0 ? (s = this._rwardAngleMap[this._lotterySkinId], Pt.Instance
                    .seeVideoLotteryTimes = 0, Pt.Instance.setSkinUnlock(this._lotterySkinId)) : s = this
                ._rwardAngleMap[this._lotteryGold], n.Instance.playLottery(), this.startWhirlCom(s + 1440)
        }
        startWhirlCom(t) {
            this._targetRotion = t % 360, this._targetRotion <= 60 && (this._targetRotion += 360), this
                ._statusMark = "yunsu", this._startTime = Kt.now, this._currTime = this._startTime, Laya.timer
                .frameLoop(1, this, this.whirlComRun)
        }
        whirlComRun() {
            if ("yunsu" == this._statusMark) this._whirlCom.rotation += 15, Kt.now - this._currTime > this
                ._yunsuTime && (this._statusMark = "jiasu", this._currTime = Kt.now, this._whirlCom.rotation = this
                    ._whirlCom.rotation % 360);
            else if ("jiasu" == this._statusMark) {
                if (this._whirlCom.rotation += 7.5, Kt.now - this._startTime > this._lotteryTime) {
                    let t = this._whirlCom.rotation % 360 == 0 ? 360 : this._whirlCom.rotation % 360,
                        e = this._targetRotion - t;
                    return void(e >= 60 && e <= 80 && (this._statusMark = "stop", this._whirlCom.rotation = t))
                }
                Kt.now - this._currTime > this._jiasuTime && (this._statusMark = "jiansu", this._currTime = Kt.now,
                    this._whirlCom.rotation = this._whirlCom.rotation % 360)
            } else "jiansu" == this._statusMark ? (this._whirlCom.rotation += 2.5, Kt.now - this._currTime > this
                ._jiansuTime && (this._statusMark = "jiasu", this._currTime = Kt.now, this._whirlCom.rotation =
                    this._whirlCom.rotation % 360)) : "stop" == this._statusMark && (Laya.timer.clear(this, this
                .whirlComRun), Laya.Tween.to(this._whirlCom, {
                rotation: this._targetRotion
            }, 1e3, Laya.Ease.linearIn, Laya.Handler.create(this, this.sendRward)))
        }
        randomRward(t) {
            if (t)
                for (; this._lotteryGold <= 0;) {
                    let t = r.lotteryByWeight(this._weightList);
                    t = t >= this._weightList.length ? this._weightList.length - 1 : t;
                    let e = this._goldIndexList.indexOf(t);
                    e >= 0 && (this._lotteryGold = this._goldList[e])
                } else
                    for (; this._lotteryGold <= 0 && this._lotterySkinId <= 0;) {
                        let t = r.lotteryByWeight(this._weightList);
                        t = t >= this._weightList.length ? this._weightList.length - 1 : t;
                        let i = this._goldIndexList.indexOf(t);
                        if (i >= 0) this._lotteryGold = this._goldList[i];
                        else if (this._skinIndexList.indexOf(t) >= 0) {
                            let i = e.LOTTERY_SKIN_LIST,
                                s = this._skinIndexList.indexOf(t) + 1,
                                n = s <= i.length - 1 && i[s] || null;
                            n && !Pt.Instance.isSkinUnlock(n) && (this._lotterySkinId = n)
                        }
                    }
        }
        sendRward() {
            this._isLottery = !1, this._btnClose.enabled = !0, this._lotterySkinId > 0 ? (this._lotterySkinId == e
                .LOTTERY_SKIN_LIST[0] ? n.Instance.play_CC_Rward() : n.Instance.play_PT_Rward(), Gt.Instance
                .showUI(nt.SkinUnlock, {
                    skinId: this._lotterySkinId
                })) : this._lotteryGold > 0 && (Gt.Instance.showUI(nt.GoldAni, {
                gold: this._lotteryGold
            }), _.show("Congratulations, receive " + this._lotteryGold + "Gold")), this.refreshSkin(), this.refreshBar()
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose:
                    this.hide();
                    break;
                case this._btnFree:
                    this.startLottery();
                    break;
                case this._btnVideo:
                    if (this._isLottery) return void _.show("Please Wait...");
                    this.seeAdVidio()
            }
        }
        seeAdVidio() {
            var t = this;
            window.adsMgr && window.adsMgr.showVideoAd({
                success: function() {
                    t.getVidioAward(!0)
                },
                fail: function() {}
            })
        }
        getVidioAward(t) {
            t && (Pt.Instance.seeVideoLotteryTimes += 1, this.refreshBar(), this.startLottery())
        }
        hide() {
            super.hide()
        }
    }
    class Z extends h {
        constructor() {
            super(), this._signItems = [], this._goldList = [200, 300, 400], this._getSkinDay = [2, 4, 6, 7]
        }
        initUI() {
            super.initUI(), this._controller = this.contentPane.getController("c1");
            let t = this.contentPane.getChild("n15");
            this._btnClose = t.getChild("n13"), this._btnClose1 = this.contentPane.getChild("n11"), this
                ._btnClose2 = this.contentPane.getChild("n16"), this._btnVideo = this.contentPane.getChild("n10"),
                this._ani2 = this.contentPane.getTransition("t2"), this._ani2.stop(), this._btnClose1.visible = !1,
                this._btnClose2.visible = !1, this._signItems.push(t.getChild("n16")), this._signItems.push(t
                    .getChild("n15")), this._signItems.push(t.getChild("n14")), this._signItems.push(t.getChild(
                    "n19")), this._signItems.push(t.getChild("n18")), this._signItems.push(t.getChild("n17")), this
                ._signItems.push(t.getChild("n20")), this._btnClose.onClick(this, this.onTouch, [this._btnClose]),
                this._btnClose1.onClick(this, this.onTouch, [this._btnClose1]), this._btnClose2.onClick(this, this
                    .onTouch, [this._btnClose2]), this._btnVideo.onClick(this, this.onTouch, [this._btnVideo]), this
                .contentPane.getChild("n12").height = Laya.stage.height, this.contentPane.getChild("n12").width =
                Laya.stage.width
        }
        show(t) {
            super.show({
                showBanner: !0
            }), Laya.timer.once(500, this, () => {
                Ht.Ins.hideBanner()
            }), this._signRwardList = [this._goldList[0], e.SIGN_SKIN_LIST[0], this._goldList[1], e
                .SIGN_SKIN_LIST[1], this._goldList[2], e.SIGN_SKIN_LIST[2], e.SIGN_SKIN_LIST[3]
            ];
            let i = Pt.Instance.signTimes,
                s = Pt.Instance.signToday;
            console.log("signTimes,signToday", i, s);
            let n = Kt.isToday(s);
            this._controller.selectedIndex = 1, this._getSkinDay.indexOf(i + 1) >= 0 && (this._controller
                    .selectedIndex = 0), this._btnClose1.visible = !1, this._btnClose2.visible = !1, n || (this
                    ._btnClose1.visible = !0, this._btnClose2.visible = !0), this._btnVideo.getController("c1")
                .selectedIndex = 0, i >= this._signRwardList.length && (this._btnClose2.visible = !1), this._ani2 &&
                this._ani2.play(null, 1);
            for (let t = 0; t < this._signItems.length; t++) {
                let e = this._signItems[t];
                e.getController("c1").selectedIndex = i > t ? 1 : 0, e.getChild("n6").visible = !1
            }
            i < this._signItems.length && !n && (this._signItems[i].getChild("n6").visible = !0)
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose:
                case this._btnClose1:
                case this._btnClose2:
                    this.sendReward(), this.hide();
                    break;
                case this._btnVideo:
                    this.seeAdVidio()
            }
        }
        seeAdVidio() {
            var t = this;
            window.adsMgr && window.adsMgr.showVideoAd({
                success: function() {
                    t.getVidioAward(!0)
                },
                fail: function() {}
            })
        }
        getVidioAward(t) {
            t && (Pt.Instance.changeGold(e.SEE_VIDEO_ADD_GOLD), _.show("Congratulations, receive " + e.SEE_VIDEO_ADD_GOLD + "Gold"))
        }
        sendReward() {
            let t = Pt.Instance.signToday,
                i = Kt.isToday(t),
                s = Pt.Instance.signTimes;
            if (i || s >= this._signRwardList.length) return;
            let n = this._signRwardList[s];
            0 == this._controller.selectedIndex ? (Pt.Instance.setSkinUnlock(n), Gt.Instance.showUI(nt.SkinUnlock, {
                    skinId: n
                })) : (_.show("Congratulations, receive " + n + "Gold"), Pt.Instance.changeGold(e.SEE_VIDEO_ADD_GOLD)), Pt.Instance
                .signTimes += 1, Pt.Instance.signToday = Kt.now, Laya.stage.event(a.EVENT_UPDATE_SIGNBTN)
        }
        hide() {
            super.hide()
        }
    }
    class Q extends fgui.GComponent {
        constructFromXML(t) {
            super.constructFromXML(t), this._keyItems = new Array, this._keyItems.push(this.getChild("n9")),
                this._keyItems.push(this.getChild("n10")), this._keyItems.push(this.getChild("n11")), Laya.stage
                .on(a.EVENT_UPDATE_YAOSHI, this, this.updateYaoShi), this.updateYaoShi()
        }
        updateYaoShi() {
            let t = Pt.Instance.yaoshiCount,
                e = this._keyItems.length;
            for (let i = 0; i < e; i++) {
                this._keyItems[i].getController("c1").selectedIndex = t > i ? 0 : 1
            }
        }
    }
    Q.URL = "ui://lgmuflyqh2s487";
    class tt extends fgui.GComponent {
        constructor() {
            super(...arguments), this._skinId = -1
        }
        constructFromXML(t) {
            super.constructFromXML(t), this._control = this.getController("c1"), this._bonusLoader = this
                .getChild("n7").asLoader, this._txt = this.getChild("n4").asTextField, this._txt.text = "", this
                ._ani0 = this.getTransition("t0"), this._ani1 = this.getTransition("t1"), this._ani2 = this
                .getTransition("t2"), this.stop()
        }
        set skinId(t) {
            this._txt.text = "", this._skinId = t, this._bonusLoader.url = S.Instance.getSkinUrl(this._skinId)
        }
        get skinId() {
            return this._skinId
        }
        set gold(t) {
            this._skinId = -1, this._txt.text = t + ""
        }
        get gold() {
            return "" == this._txt.text || isNaN(parseInt(this._txt.text)) ? 0 : parseInt(this._txt.text)
        }
        get isOpen() {
            return 0 != this._control.selectedIndex
        }
        setControl(t = 0) {
            this._control.selectedIndex = t, 0 == this._control.selectedIndex && (this._ani0 && this._ani0.play(
                null, -1), this._ani1 && this._ani1.play(null, -1), this._ani2 && this._ani2.play(null,
                -1))
        }
        stop() {
            this._ani0 && this._ani0.stop(), this._ani1 && this._ani1.stop(), this._ani2 && this._ani2.stop()
        }
    }
    tt.URL = "ui://lgmuflyqh2s47d";
    class et extends h {
        constructor() {
            super(), this._skinId = 0
        }
        initUI() {
            super.initUI(), this._btnClose = this.contentPane.getChild("n5"), this._btnOpenSkin = this.contentPane
                .getChild("n4"), this._btnClose.onClick(this, this.onTouch, [this._btnClose]), this._btnOpenSkin
                .onClick(this, this.onTouch, [this._btnOpenSkin]), this.contentPane.getChild("n0").height = Laya
                .stage.height, this.contentPane.getChild("n0").width = Laya.stage.width
        }
        firstOpenUI() {
            Laya.stage.on(a.ZIP_BULLET_SUCCESS, this, this.refreshBucketModel, [this._skinId])
        }
        show(t) {
            super.show({
                showBanner: !0
            }), this._skinId = t && t.skinId || 0, this.loadScene3d()
        }
        loadScene3d() {
            let t = this;
            Laya.Scene3D.load(Yt.SHOP, Laya.Handler.create(this, function(e) {
                t.loadComplet(e)
            }))
        }
        loadComplet(t) {
            this._shopScene = t, this._shopScene.parent || Laya.stage.addChild(t);
            var e = t.getChildByName("Main Camera");
            e && (e.active = !0, e.enableHDR = !1, e.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY), this
                ._skinParent = t.getChildByName("skinParent"), this._skinParent.transform.localScale = new Laya
                .Vector3(6, 6, 6), this._skinParent.transform.rotationEuler = new Laya.Vector3(45, 90, 0), this
                ._skinParent.removeChildren(), this._skinId > 0 && this.refreshBucketModel()
        }
        refreshBucketModel() {
            if (!this.contentPane.visible || !this._skinParent) return;
            if (!Yt.isLoadServerBullet && Yt.isServerBullet(this._skinId)) return;
            this._skinParent.removeChildren();
            let t = Yt.bulletUrl(this._skinId);
            if (Laya.loader.getRes(t)) {
                let e = Laya.Sprite3D.instantiate(Laya.loader.getRes(t));
                this._skinParent.addChild(e);
                let i = (z.isLiuHaiScreen(), 2.2),
                    s = -.4;
                1014 == this._skinId || 1015 == this._skinId || 1020 == this._skinId ? s = -1 : 1017 == this
                    ._skinId && (s = -1.5), e.transform.position = new Laya.Vector3(0, i, 0)
            } else Laya.loader.create(t, Laya.Handler.create(this, () => {
                this.refreshBucketModel()
            }))
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose:
                    this._skinId > 0 && (Pt.Instance.useSkinId = this._skinId), this.hide();
                    break;
                case this._btnOpenSkin:
                    this.hide(), Gt.Instance.showUI(nt.Skin)
            }
        }
        hide() {
            super.hide(), Laya.timer.clearAll(this), this._skinId = 0, this._skinParent && this._skinParent
                .removeChildren(), this._shopScene && this._shopScene.parent && this._shopScene.removeSelf()
        }
    }
    class it extends h {
        constructor() {
            super()
        }
        initUI() {
            super.initUI(), this._ctrl2 = this.contentPane.getController("c2"), this._control = this.contentPane
                .getController("c1"), this._btnVidio = this.contentPane.getChild("n7"), this._ctrlBtn = this
                .contentPane.getChild("n13"), this._checkCtrlBtn = this._ctrlBtn.asCom.getController("c1"), this
                ._btnCloseDo = this.contentPane.getChild("n14"), this._btnCloseNot = this.contentPane.getChild(
                    "n15"), this._ctrlBtn.onClick(this, this.onTouch, [this._ctrlBtn]), this._btnVidio.onClick(this,
                    this.onTouch, [this._btnVidio]), this._btnCloseDo.onClick(this, this.onCloseDo), this
                ._btnCloseNot.onClick(this, this.onCloseNot)
        }
        onCloseDo() {
            this.seeAdVidio()
        }
        onCloseNot() {
            this.hide()
        }
        show(t) {
            super.show({
                showBanner: !0
            });
            let e = l.Instance.conditionVidioUnlockSkin();
            e && (this._skinId = e.skinId), this._control.selectedIndex = 1012 == this._skinId ? 0 : 1, this
                ._btnVidio.getController("c1").selectedIndex = 0, this._ctrlBtn.visible = !1, window.adsMgr ? (this
                    ._ctrlBtn.selected = !0, setTimeout(() => {
                        this._ctrlBtn.visible = !0
                    }, 3e3), this._checkCtrlBtn.selectedIndex = Math.random() > .5 ? 1 : 0, 0 == this._checkCtrlBtn
                    .selectedIndex ? this._ctrl2.selectedIndex = 0 : this._ctrl2.selectedIndex = 1) : (this._ctrlBtn
                    .visible = !1, this._ctrl2.selectedIndex = 1)
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._ctrlBtn:
                    0 == this._checkCtrlBtn.selectedIndex && 0 == this._ctrl2.selectedIndex ? this._ctrl2
                        .selectedIndex = 1 : 0 == this._checkCtrlBtn.selectedIndex && 1 == this._ctrl2
                        .selectedIndex ? this._ctrl2.selectedIndex = 0 : 1 == this._checkCtrlBtn.selectedIndex &&
                        0 == this._ctrl2.selectedIndex ? this._ctrl2.selectedIndex = 1 : 1 == this._checkCtrlBtn
                        .selectedIndex && 1 == this._ctrl2.selectedIndex && (this._ctrl2.selectedIndex = 0);
                    break;
                case this._btnVidio:
                    this.seeAdVidio()
            }
        }
        seeAdVidio() {
            var t = this;
            window.adsMgr && window.adsMgr.showVideoAd({
                success: function() {
                    t.getVidioAward(!0)
                },
                fail: function() {}
            })
        }
        getVidioAward(t) {
            if (t) {
                let t = Pt.Instance.getSkinVideoTimes(this._skinId);
                Pt.Instance.setSkinVideoTimes(this._skinId, t + 1), Pt.Instance.setSkinUnlock(this._skinId), Gt
                    .Instance.showUI(nt.SkinUnlock, {
                        skinId: this._skinId
                    }), console.log("unlock Skin:", this._skinId), this.hide()
            }
        }
        hide() {
            super.hide()
        }
    }
    class st {
        constructor() {
            this._levelMap = {}
        }
        static get Instance() {
            return null == st._ins && (st._ins = new st), st._ins
        }
        init() {}
        levelScene(t) {
            return t || (t = Pt.Instance.level), t > e.TOTAL_LEVEL ? (t = (t - this._levelList.length - 1) % 14 + 1,
                t += 6) : t = (t - 1) % this._levelList.length + 1, t <= 10 ? 1 : 2
        }
        levelConfig(t) {
            return t || (t = Pt.Instance.level), t > e.TOTAL_LEVEL ? (t = (t - this._levelList.length - 1) % 14 + 1,
                t += 6) : t = (t - 1) % this._levelList.length + 1, this._levelMap && this._levelMap[t]
        }
        levelRewardGold(t) {
            return 50
        }
    }
    var nt, at, ot, ht = Laya.EventDispatcher;
    class rt extends ht {
        constructor() {
            super()
        }
        static get Ins() {
            return rt._ins || (rt._ins = new rt), rt._ins
        }
        Emit(t, e) {
            console.log("Dispatch Event", t), rt.eventDispatcher.event(t, e)
        }
        AddNotice(t, e, i, s) {
            console.log("Listen For Events", t), rt.eventDispatcher.on(t, e, i, null == s ? null : [s])
        }
        offNotice(t, e, i) {
            rt.eventDispatcher.off(t, e, i)
        }
    }
    rt.eventDispatcher = new ht, rt._ins = null;
    class lt extends h {
        constructor() {
            super(), this._isReset = !1, this._isShareSuccess = !1
        }
        initUI() {
            this._goldTxt = this.contentPane.getChild("n9").getChild("n4"), this._bar = this.contentPane.getChild(
                    "n0"), this._btnCloseGold3 = this.contentPane.getChild("n18"), this._btnCheck = this.contentPane
                .getChild("n19"), this._btnCheckCtrl = this._btnCheck.getController("c1"), this._getBtn = this
                .contentPane.getChild("n83"), this._contorller = this.contentPane.getController("c1"), this
                ._lvItem = this.contentPane.getChild("n6").getChild("n6"), this._ani1 = this.contentPane
                .getTransition("t0"), this._ani1.stop(), this._btnCloseGold3.onClick(this, this.SexRewardGet, [this
                    ._btnCloseGold3
                ]), this._getBtn.onClick(this, this.commonGet)
        }
        do_TL_Action() {
            this._btnCheck.visible = !1, setTimeout(() => {
                this._btnCheck.visible = !0
            }, 3e3), rt.Ins.offNotice("_tlAction_", this, null)
        }
        show(t) {
            super.show({
                showBanner: !1
            });
            let e = this;
            window._tlAction_ = !1, Pt.Instance.level < 8 ? 4 == Pt.Instance.level && (window._tlAction_ = !0, rt
                    .Ins.AddNotice("_tlAction_", this, function() {
                        e.do_TL_Action()
                    })) : Pt.Instance.level > 8 && !window._endFullAd_ && (window._tlAction_ = !0, rt.Ins.AddNotice(
                    "_tlAction_", this,
                    function() {
                        e.do_TL_Action()
                    })), Gt.Instance.hideUI(nt.Game), this._isReset = !0, this._isShareSuccess = !1, this._ani1 &&
                this._ani1.play(null, 1), this.contentPane.getChild("n6").getTransition("t0").play(null, 1), n
                .Instance.playWin(), this._lvItem.visible = 0 == D.Instance.enterType, this._lvItem.setLevel(D
                    .Instance.enterLevel), this._rwardGold = st.Instance.levelRewardGold(), this._goldTxt.text =
                this._rwardGold + "", this._bar.visible = !1, this.contentPane.getChild("n1").visible = this
                .contentPane.getChild("n2").visible = this._bar.visible, this._btnCheck.visible = !1, window
                .adsMgr && window.adsMgr._openDanger ? (this._btnCheck.selected = !0, setTimeout(() => {
                        this._btnCheck.visible = !0
                    }, 3e3), this._btnCheckCtrl.selectedIndex = window._SaoCheck_, 0 == window._SaoCheck_ ? window
                    ._SaoCheck_ = 1 : window._SaoCheck_ = 0) : this._btnCheck.visible = !1
        }
        commonGet() {
            n.Instance.playButton(), this._btnCheck.visible ? this._btnCheck.selected && 0 == this._btnCheckCtrl
                .selectedIndex ? (console.log("Strategy 1 Receive"), this.SexRewardGet()) : this._btnCheck.selected || 1 != this
                ._btnCheckCtrl.selectedIndex ? (console.log("Default Collection"), this.getVidioAward(!0, this._rwardGold)) : (
                    console.log("Strategy 2 Receive"), this.SexRewardGet()) : (this.getVidioAward(!0, this._rwardGold), console
                    .log("Ordinary Collection"))
        }
        SexRewardGet(t) {
            t && n.Instance.playButton();
            let e = this;
            window.adsMgr && window.adsMgr.showVideoAd({
                success: () => {
                    e.getVidioAward(!0, 6 * e._rwardGold)
                },
                fail: () => {}
            })
        }
        refreshBar() {
            this._bar.visible = !0;
            let t = e.SCENE_LEVEL_LIST,
                i = D.Instance.enterLevel;
            if (i >= t[t.length - 2]) return this._bar.visible = !1, void(this.contentPane.getChild("n1").visible =
                this.contentPane.getChild("n2").visible = this._bar.visible);
            let s = 0,
                n = 0,
                a = 0;
            for (let e = 0; e < t.length; e++)
                if (i >= t[e] && i <= t[e + 1]) {
                    s = t[e], n = t[e + 1], a = e + 1;
                    break
                } let o = Math.floor((i - s) / (n - s) * 100);
            this._bar.value = o
        }
        seeAdVidio(t) {
            var e = this;
            window.adsMgr && window.adsMgr.showVideoAd({
                success: function() {
                    e.getVidioAward(!0, t)
                },
                fail: function() {}
            })
        }
        getVidioAward(t, e) {
            t && (Gt.Instance.showUI(nt.GoldAni, {
                gold: e
            }), this.hide())
        }
        hide() {
            super.hide(), this._ani1 && this._ani1.stop(), this._isReset && (Gt.Instance.showUI(nt.Hall, {
                isReset: !0
            }), l.Instance.actionUI()), window._endFullAd_ = !window._endFullAd_
        }
    }
    class ct extends h {
        constructor() {
            super(), this._isReset = !1, this._isShareSuccess = !1
        }
        initUI() {
            super.initUI(), this._btnRecord = this.contentPane.getChild("n7"), this._btnClose = this.contentPane
                .getChild("n6"), this._btnJump = this.contentPane.getChild("n11"), this._imgItem = this.contentPane
                .getChild("n5"), this._btnCaiDan = this._imgItem.getChild("n3"), this._lvItem = this.contentPane
                .getChild("n1").getChild("n7"), this._ani1 = this.contentPane.getTransition("t1"), this._ani1
            .stop(), this._btnRecord.onClick(this, this.onTouch, [this._btnRecord]), this._btnClose.onClick(this,
                    this.onTouch, [this._btnClose]), this._btnCaiDan.onClick(this, this.onTouch, [this._btnCaiDan]),
                this._btnJump.onClick(this, this.onTouch, [this._btnJump])
        }
        show(t) {
            super.show({
                    showBanner: !0
                }), Laya.timer.once(500, this, super.showMoreGameBanner), Gt.Instance.hideUI(nt.Game), this
                ._isReset = !0, this._isShareSuccess = !1, this.contentPane.getChild("n1").getTransition("t0").play(
                    null, 1), this._ani1.stop(), this._ani1.play(null, 1), this._lvItem.visible = 0 == D.Instance
                .enterType, this._btnJump.visible = 0 == D.Instance.enterType, this._lvItem.setLevel(D.Instance
                    .enterLevel), n.Instance.playFail(), Ht.Ins.stopRecord(), this._btnClose.visible = !0
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnCaiDan:
                    this.hide(nt.CaiDan);
                    break;
                case this._btnClose:
                    this.hide();
                    break;
                case this._btnRecord:
                    break;
                case this._btnJump:
                    this.seeAdVidio()
            }
        }
        shareRecordCallBack(t, i) {
            t ? (console.log("Recording and sharing successfully"), this._isShareSuccess || (this._isShareSuccess = !0, 0 == Pt.Instance
                .firstShare && (Pt.Instance.firstShare = 1, Pt.Instance.isSkinUnlock(e.SHARE_SKINID) || (Pt
                    .Instance.setSkinUnlock(e.SHARE_SKINID), Gt.Instance.showUI(nt.SkinUnlock, {
                        skinId: e.SHARE_SKINID
                    }))), Gt.Instance.showUI(nt.GoldAni, {
                    gold: e.SEE_VIDEO_ADD_GOLD
                }))) : i && _.show("Screen record failed: Time is less than 3 seconds")
        }
        seeAdVidio() {
            var t = this;
            window.adsMgr && window.adsMgr.showVideoAd({
                success: function() {
                    t.getVidioAward(!0)
                },
                fail: function() {}
            })
        }
        getVidioAward(t) {
            t && (Pt.Instance.changeLevel(Pt.Instance.level + 1), D.Instance.resetGame(0), this.hide())
        }
        hide(t) {
            super.hide(), this._ani1 && this._ani1.stop(), this._isReset && (Gt.Instance.showUI(nt.Hall, {
                isReset: !0
            }), t ? Gt.Instance.showUI(t) : l.Instance.actionUI())
        }
    }
    class _t extends h {
        constructor() {
            super(), this._bulletList = [], this._getCaiDanNum = 0, this.KILL_TIME = 15e3, this._currKillTime = 0,
                this._killCount = 0, this._killInitY = 0, this._killIMGList = ["ui://lgmuflyqci42jl",
                    "ui://lgmuflyqci42jf", "ui://lgmuflyqci42jg", "ui://lgmuflyqci42je", "ui://lgmuflyqci42jd",
                    "ui://lgmuflyqci42ji", "ui://lgmuflyqci42jh"
                ]
        }
        initUI() {
            this._contorl = this.contentPane.getController("c1"), this._bossBar = this.contentPane.getChild("n3")
                .getChild("n3"), this._bulletText = this.contentPane.getChild("n4").getChild("n4"), this
                ._bossBulletText = this.contentPane.getChild("n8").getChild("n4"), this._shizhi = this.contentPane
                .getChild("n0"), this._btnRefresh = this.contentPane.getChild("n17"), this.contentPane.getChild(
                    "n6").getTransition("t0").stop(), this._killCom = this.contentPane.getChild("n15"), this
                ._killBar = this._killCom.getChild("n1"), this._killLoader = this._killCom.getChild("n2"), this
                ._killIMGAni = this._killCom.getTransition("chuxian"), this._killInitY = this._killCom.y, this
                ._killCom.visible = !1, this._btnSkill = this.contentPane.getChild("n14"), this._btnSkill
                .visible = !1, this._caiDanAni1 = this.contentPane.getTransition("t0"), this._caiDanAni1.stop(),
                this._caiDanAni2 = this.contentPane.getTransition("t2"), this._caiDanAni2.stop(), this._caiDanCom =
                this.contentPane.getChild("n12"), this._caiDanImg = this.contentPane.getChild("n11"), this
                ._skillAni = this._btnSkill.getTransition("t1"), this._skillAni.stop();
            let t = this.contentPane.getChild("n9");
            for (let e = 0; e < t.numChildren; e++) this._bulletList.push(t.getChildAt(e));
            this._shizhi.onClick(this, this.onTouch, [this._shizhi]), this._btnSkill.onClick(this, this.onTouch, [
                    this._btnSkill
                ]), this._btnRefresh.onClick(this, this.onTouch, [this._btnRefresh]), Laya.stage.on(a.GET_CAIDAN,
                    this, this.getCaiDan), Laya.stage.on(a.EVENT_UPDATE_ENEMY_COUNT, this, this.refreshEnemyCount),
                Laya.stage.on(a.FINISH_NEW_HAND, this, this.finishNewHand), Laya.stage.on(a
                    .EVENT_UPDATE_BULLET_COUNT, this, this.refreshBulletCount), Laya.stage.on(a.LOAD_QIULONG_FINISH,
                    this, this.showBtnSkill), Laya.stage.on(a.GAME_OVER, this, this.gameOver), Laya.stage.on(a
                    .SECKILL_BOSS, this, this.seckillBoss), this.contentPane.getChild("n7").height = Laya.stage
                .height, this.contentPane.getChild("n7").width = Laya.stage.width
        }
        show(t) {
            super.show({
                showBanner: !1
            }), this.startGame(!1)
        }
        startGame(t) {
            this._btnRefresh.visible = !0, this._caiDanCom.visible = !1, this._caiDanImg.visible = !1, this
                ._caiDanAni1.stop(), this._caiDanAni2.stop(), this._getCaiDanNum = 0, this._killCom.visible = !1,
                this._currKillTime = 0, this._killCount = 0, this.showBtnSkill(), this.contentPane.getChild("n1")
                .visible = 0 == D.Instance.enterType;
            let e = o.Instance.enemyInfo && o.Instance.enemyInfo.isBoss;
            this._killCom.y = e ? this._killInitY + 80 : this._killInitY, this._contorl.selectedIndex = e ? 1 : 0;
            let i = o.Instance.enemyInfo && o.Instance.enemyInfo.die || 0,
                s = o.Instance.enemyInfo && o.Instance.enemyInfo.total || 0;
            this._bulletText.text = i + "/" + s, this._bossBulletText.text = i + "/" + s, this._bossBar.value = 100,
                o.Instance.isStartFighting = !0, Laya.stage.event(a.GAME_START);
            for (let t = 0; t < this._bulletList.length; t++) this._bulletList[t].visible = !1;
            this.refreshBulletCount(), this.contentPane.getChild("n6").visible = !1, this.contentPane.getChild("n6")
                .getTransition("t0").stop(), 1 == D.Instance.enterLevel && (this.contentPane.getChild("n6")
                    .visible = !0, this.contentPane.getChild("n6").getTransition("t0").play(null, -1))
        }
        gameOver() {
            Laya.timer.clear(this, this.downTime), this._btnSkill.visible = !1, this._killCom.visible = !1, this
                ._btnRefresh.visible = !1
        }
        showBtnSkill() {
            if (this._btnSkill.visible = !1, D.Instance.enterLevel < 4) return;
            let t = this._btnSkill.getController("c2");
            Laya.loader.getRes(Yt.qiulongURL()) && (this._btnSkill.visible = !0, t.setSelectedIndex(0));
            let i = Pt.Instance.skillCount;
            this._btnSkill.getController("c1").selectedIndex = i > 0 ? 0 : 1, this._skillAni.stop(), this._btnSkill
                .getChild("n7").visible = !1, 4 == D.Instance.enterLevel && (this._skillAni.play(null, -1), this
                    ._btnSkill.getChild("n7").visible = !0), Pt.Instance.useSkinId == e.TASK_LEISHENGCHUI ? t
                .setSelectedIndex(1) : Pt.Instance.useSkinId == e.TASK_BINGFAZHANG ? t.setSelectedIndex(2) : Pt
                .Instance.useSkinId == e.TASK_GUITAR && t.setSelectedIndex(3)
        }
        finishNewHand() {
            this.contentPane.getChild("n6").visible = !1, this.contentPane.getChild("n6").getTransition("t0").stop()
        }
        isOpenNewHand() {
            return this.contentPane.getChild("n6").visible
        }
        refreshBulletCount() {
            let t = o.Instance.bulletCount,
                e = Math.min(o.Instance.bulletMaxCount, this._bulletList.length);
            for (let i = 0; i < e; i++) {
                let e = this._bulletList[i];
                e.visible = !0, e.getController("c1").selectedIndex = t > i ? 0 : 1
            }
        }
        refreshEnemyCount(t) {
            t && (console.log(t), t.die && t.total && (this._bulletText.text = t.die + "/" + t.total, this
                    ._bossBulletText.text = t.die + "/" + t.total), t.bossHurt && (this._bossBar.value -= 34),
                this._killCom.visible = !0, this._killCount += 1, this._killLoader.url = this._killIMGList[this
                    ._killCount - 1], this._killIMGAni.play(null, 1), n.Instance.playkill(this._killCount), this
                ._currKillTime = this.KILL_TIME, Laya.timer.clear(this, this.downTime), Laya.timer.frameOnce(1,
                    this, this.downTime))
        }
        seckillBoss(t) {
            t && (t.die && t.total && (this._bulletText.text = t.die + "/" + t.total, this._bossBulletText.text = t
                    .die + "/" + t.total), this._bossBar.value = 0, this._killCom.visible = !0, this
                ._killCount += 1, this._killLoader.url = this._killIMGList[this._killCount - 1], this
                ._killIMGAni.play(null, 1), n.Instance.playkill(this._killCount), this._currKillTime = this
                .KILL_TIME, Laya.timer.clear(this, this.downTime), Laya.timer.frameOnce(1, this, this.downTime))
        }
        downTime() {
            let t = Laya.timer.delta;
            if (this._currKillTime -= t, this._currKillTime <= 0) return this._killCount = 0, this._currKillTime =
                0, void(this._killCom.visible = !1);
            this._killBar.value = Math.floor(this._currKillTime / this.KILL_TIME * 100), Laya.timer.frameOnce(1,
                this, this.downTime)
        }
        getCaiDan() {
            ++this._getCaiDanNum, this._caiDanImg.visible = !0, this._caiDanAni2.play(Laya.Handler.create(this,
            () => {
                    this._caiDanCom.visible = !0, this._caiDanAni1.play(null, 1), this._caiDanCom.getChild(
                        "n5").text = this._getCaiDanNum + ""
                }), 1)
        }
        resetGame() {
            o.Instance.isStartFighting = !1, Laya.stage.event(a.DESTROY_BULLET), D.Instance.resetGame(D.Instance
                .enterLevel), Laya.timer.clearAll(this), Laya.timer.frameOnce(10, this, () => {
                this.startGame(!0)
            })
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._shizhi:
                    Gt.Instance.showUI(nt.Stting);
                    break;
                case this._btnSkill:
                    if (Pt.Instance.skillCount > 0) {
                        if (o.Instance.uesdSkill) return void _.show("The Ultimate Move can only be used once each level");
                        o.Instance.uesdSkill = !0, Laya.stage.event(a.USE_SKILL), Pt.Instance.skillCount -= 1, this
                            .showBtnSkill(), e.TASK_RANGE_LIST.indexOf(Pt.Instance.useSkinId) >= 0 && (this
                                ._btnSkill.visible = !1)
                    } else Laya.stage.event(a.PAUSE_GAME), this.seeAdVidio();
                    break;
                case this._btnRefresh:
                    this.resetGame()
            }
        }
        seeAdVidio() {
            var t = this;
            window.adsMgr && window.adsMgr.showVideoAd({
                success: function() {
                    t.getVidioAward(!0)
                },
                fail: function() {
                    Laya.stage.event(a.GO_ON_GAME)
                }
            })
        }
        getVidioAward(t) {
            t ? (Pt.Instance.skillCount += 1, this.showBtnSkill(), Laya.stage.event(a.GO_ON_GAME)) : Laya.stage
                .event(a.GO_ON_GAME)
        }
        hide() {
            super.hide()
        }
    }
    class dt extends h {
        constructor() {
            super()
        }
        initUI() {
            super.initUI(), this.replayCom = this.contentPane.getChild("n0"), this._ani1 = this.replayCom
                .getTransition("t0"), this._ani1.stop(), this.replayCom.height = Laya.stage.height, this.replayCom
                .width = Laya.stage.width
        }
        show(t) {
            super.show({
                showBanner: !0
            }), this._ani1 && this._ani1.play(null, -1)
        }
        hide() {
            super.hide(), this._ani1 && this._ani1.stop()
        }
    }
    class gt extends h {
        constructor() {
            super(), this._modelId = 0, this._modelEuler = new Laya.Vector3
        }
        initUI() {
            super.initUI(), this._btnClose = this.contentPane.getChild("n2"), this._btnExchage = this.contentPane
                .getChild("n32"), this._txtExchageCode = this.contentPane.getChild("n33"), this._skinList = this
                .contentPane.getChild("n21").asList, this._skinList.itemRenderer = Laya.Handler.create(this, this
                    .setCaiDanItemData, null, !1), this._btnClose.onClick(this, this.onTouch, [this._btnClose]),
                this._btnExchage.onClick(this, this.onTouch, [this._btnExchage]), Laya.stage.on(a.SHOW_CAIDAN_MODEL,
                    this, this.showModel), Laya.stage.on(a.REFRESH_SKIN, this, this.refresh), Laya.stage.on(a
                    .SET_CAIDANQIANG_MODUEL_POS, this, this.refreshModelPos)
        }
        firstOpenUI() {
            Laya.stage.on(a.ZIP_BULLET_SUCCESS, this, this.refreshBucketModel, [this._modelId])
        }
        show(t) {
            super.show({
                showBanner: !1
            }), Pt.Instance.openedCaiDanQing = 1, this.refresh()
        }
        refresh() {
            this.contentPane.visible && (this.clear(), Laya.stage.event(a.OPENED_CAIDANQIANG), Laya.stage.event(a
                    .REFRESH_CAIDAN_ITEM), this._skinList.numItems = e.TASK_SKIN_LIST.length + 12, this
                .defaultSelectSkin(), this.loadScene3d(), Laya.timer.clear(this, this.modelRotate), Laya.timer
                .frameLoop(1, this, this.modelRotate))
        }
        defaultSelectSkin() {
            if (this.contentPane.visible) {
                this._currSelectCaiDanItem = null;
                for (var t = 0; t < this._skinList.numItems; t++) {
                    let e = this._skinList.getChildAt(t);
                    if (e.skinId == Pt.Instance.useSkinId) {
                        this._currSelectCaiDanItem = e;
                        break
                    }
                }
                this._currSelectCaiDanItem || (this._currSelectCaiDanItem = this._skinList.getChildAt(0)), this
                    ._skinList.scrollToView(this._currSelectCaiDanItem.index), this.refreshBucketModel(this
                        ._currSelectCaiDanItem.skinId)
            }
        }
        loadScene3d() {
            let t = this;
            Laya.Scene3D.load(Yt.SHOP, Laya.Handler.create(this, function(e) {
                t.loadComplet(e)
            }))
        }
        loadComplet(t) {
            this._shopScene = t, this._shopScene.parent || Laya.stage.addChild(t);
            var e = t.getChildByName("Main Camera");
            e && (e.active = !0, e.enableHDR = !1, e.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY), this
                ._skinParent = t.getChildByName("skinParent"), this._skinParent.active = !0, this._skinParent
                .transform.localScale = new Laya.Vector3(6, 6, 6), this._skinParent.transform.rotationEuler =
                new Laya.Vector3(0, -90, 0), this._skinParent.removeChildren(), this._modelId > 0 && this
                .refreshBucketModel(this._modelId)
        }
        refreshBucketModel(t) {
            if (this._modelId = t, !this.contentPane.visible || !this._skinParent) return;
            if (!Yt.isLoadServerBullet && Yt.isServerBullet(t)) return;
            this._skinParent.removeChildren();
            let e = Yt.bulletUrl(this._modelId);
            if (Laya.loader.getRes(e)) {
                let t = Laya.Sprite3D.instantiate(Laya.loader.getRes(e));
                for (let e = 0; e < t.numChildren; e++) {
                    let i = t.getChildAt(e);
                    if (i.name.indexOf("FX_Trail") >= 0) {
                        i.active = !1;
                        break
                    }
                }
                this._skinParent.addChild(t), this.refreshModelPos(!1)
            } else Laya.loader.create(e, Laya.Handler.create(this, () => {
                this.refreshBucketModel(this._modelId)
            }))
        }
        refreshModelPos(t) {
            if (this._skinParent && this._skinParent.numChildren > 0) {
                let e = this._skinParent.getChildAt(0),
                    i = (z.isLiuHaiScreen(), 4.6);
                t && (i = z.isLiuHaiScreen() ? 3.2 : 2.2), e.transform.position = new Laya.Vector3(0, i, 0)
            }
        }
        modelRotate() {
            if (this._skinParent && this._skinParent.numChildren > 0) {
                let t = this._skinParent.getChildAt(0),
                    e = t.transform.rotationEuler.y + .8;
                this._modelEuler.setValue(5, e % 360, 0), t.transform.rotationEuler = this._modelEuler
            }
        }
        showModel() {
            this._skinParent && (this._skinParent.active = !0), this.defaultSelectSkin()
        }
        onClickShiyong(t, e) {
            e.stopPropagation();
            let i = Pt.Instance.getSkinVideoTimes(t.skinId);
            if (Pt.Instance.isCaidanTipsUnlock(t.skinId) || i > 0) return void this.getVidioAward(!0, t);
            let s = Yt.bulletUrl(t.skinId);
            Laya.loader.getRes(s) || Laya.loader.create(s, Laya.Handler.create(this, () => {
                console.log("loaded success url:" + s)
            })), this.seeAdVidio(t)
        }
        onClickSkinItem(t, e) {
            if (e.stopPropagation(), !(t.skinId < 0))
                if (n.Instance.playButton(), t.isUnlock || t.isShiyong) {
                    if (!this._skinParent || 0 == this._skinParent.numChildren) return void _.show("Please wait, loading resource");
                    Pt.Instance.useSkinId = t.skinId, Laya.stage.event(a.REFRESH_CAIDAN_ITEM), this
                        .refreshBucketModel(t.skinId)
                } else if (5 == t._controller.selectedIndex) _.show("Enter game from Icon");
            else {
                if (!this._skinParent || 0 == this._skinParent.numChildren) return void _.show("Please wait, loading resource");
                this.refreshBucketModel(t.skinId)
            }
        }
        seeAdVidio(t) {
            var e = this;
            window.adsMgr && window.adsMgr.showVideoAd({
                success: function() {
                    Pt.Instance.setCaidanTipsUnlock(t.skinId), t.refreshXiansuo(), e.getVidioAward(!0,
                        t)
                },
                fail: function() {}
            })
        }
        getVidioAward(t, e) {
            t && (this.refreshBucketModel(e.skinId), Gt.Instance.showUI(nt.CaiDanTanchuang, {
                skinId: e.skinId
            }))
        }
        setCaiDanItemData(t, i) {
            let s = t < (Ht.Ins.isCheckVersion() ? e.TASK_SKIN_LIST.length - 1 : e.TASK_SKIN_LIST.length) ? e
                .TASK_SKIN_LIST[t] : -1;
            i.setSkinId(t, s), i.off(Laya.Event.MOUSE_UP, this, this.onClickSkinItem), i.on(Laya.Event.MOUSE_UP,
                this, this.onClickSkinItem, [i]), i.getChild("n28").off(Laya.Event.MOUSE_UP, this, this
                .onClickShiyong), i.getChild("n28").on(Laya.Event.MOUSE_UP, this, this.onClickShiyong, [i])
        }
        sendExchange() {
            let t = this._txtExchageCode.text;
            if (this._txtExchageCode.text = "", b.isEmpty(t)) return void _.show("Enter The Redemption Code");
            let i = K.Instance.exchangeData(t);
            if (i) {
                if (x.vedioTimes == i.type) {
                    if (Pt.Instance.isSkinUnlock(parseInt(i.skinId))) _.show(S.Instance.getSkinName(parseInt(i
                        .skinId)) + "Obtained");
                    else {
                        let n = Pt.Instance.getSkinVideoTimes(parseInt(i.skinId)),
                            a = e.CAIDAN_VEDIO_TIMES[parseInt(i.skinId)] || 0;
                        if (!Pt.Instance.isUsedExchangeCode(t)) {
                            Pt.Instance.setUsedExChangeCode(t), n += 1, Pt.Instance.setSkinVideoTimes(parseInt(i
                                .skinId), n), Pt.Instance.setCaidanTipsUnlock(parseInt(i.skinId));
                            for (var s = 0; s < this._skinList.numItems; s++) {
                                let t = this._skinList.getChildAt(s);
                                if (t.skinId == parseInt(i.skinId)) {
                                    t.refreshXiansuo();
                                    break
                                }
                            }
                        }
                        if (a > 0 && n >= a) return Pt.Instance.setSkinUnlock(parseInt(i.skinId)), Gt.Instance
                            .showUI(nt.CaiDanUnlock, {
                                skinId: parseInt(i.skinId),
                                type: 1,
                                initLvel: !0
                            }), void Gt.Instance.hideUI(nt.CaiDan);
                        Gt.Instance.showUI(nt.CaiDanTanchuang, {
                            skinId: i.skinId
                        }), this.refreshBucketModel(parseInt(i.skinId)), this.refreshModelPos(!0)
                    }
                }
            } else _.show("Invalid Redemption Code")
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose:
                    this.hide();
                    break;
                case this._btnExchage:
                    this.sendExchange()
            }
        }
        clear() {
            Laya.timer.clearAll(this), this._skinParent && this._skinParent.removeChildren(), this._shopScene &&
                this._shopScene.parent && this._shopScene.removeSelf()
        }
        hide() {
            super.hide(), this.clear()
        }
    }
    class ut extends fgui.GComponent {
        constructFromXML(t) {
            super.constructFromXML(t), this._controller = this.getController("c1"), this._textController = this
                .getChild("n7").getController("c1"), this._loaderIMG = this.getChild("n3").asLoader, this
                ._xiansuoControl = this.getChild("n28").getController("c1"), this._textDownTime = this.getChild(
                    "n18").asTextField, Laya.stage.on(a.REFRESH_CAIDAN_ITEM, this, this.refresh), Laya.stage.on(
                    a.START_SKIN_SHIYONG, this, this.refresh)
        }
        setSkinId(t, e) {
            if (this._index = t, this._skinId = parseInt(e), -1 != this._skinId) {
                let t = Pt.Instance.isSkinUnlock(e),
                    i = Pt.Instance.useSkinId == e && t;
                if (this._controller.selectedIndex = i ? 1 : t ? 3 : 0, !t && this.isShiyong) {
                    let t = Pt.Instance.getSkinEndTime(this._skinId);
                    "string" == typeof t && (t = parseInt(t)), Laya.timer.clearAll(this), Laya.timer.loop(500,
                        this, this.downTime, [t]), this.downTime(t), this._controller.selectedIndex = 2
                }
                this._loaderIMG.url = S.Instance.getSkinUrl(e);
                let s = S.Instance.getSkinIndex(this._skinId);
                s >= 0 && (this._textController.selectedIndex = s), this.refreshXiansuo()
            } else this._controller.selectedIndex = 4
        }
        downTime(t) {
            let e = t - Kt.now;
            e >= 0 ? this._textDownTime.text = Kt.getTimeStr1(e) : (Pt.Instance.setSkinEndTime(this.skinId, 0),
                Laya.timer.clearAll(this), this.refresh())
        }
        refresh() {
            this.setSkinId(this._index, this._skinId)
        }
        refreshXiansuo() {
            let t = Pt.Instance.isCaidanTipsUnlock(this.skinId);
            this._xiansuoControl.selectedIndex = t ? 1 : 0
        }
        get index() {
            return this._index
        }
        get isUnlock() {
            return Pt.Instance.isSkinUnlock(this._skinId)
        }
        get isShiyong() {
            return Pt.Instance.getSkinEndTime(this._skinId) - Kt.now > 0
        }
        get skinId() {
            return this._skinId
        }
    }
    ut.URL = "ui://lgmuflyqvrnjg7";
    class It extends h {
        constructor() {
            super(), this._skinId = 0
        }
        initUI() {
            super.initUI(), this._btnClose = this.contentPane.getChild("n11"), this._loaderIMG = this.contentPane
                .getChild("n3"), this._textDownTime = this.contentPane.getChild("n18"), this._controller = this
                .contentPane.getController("c1"), this._textController = this.contentPane.getChild("n13")
                .getController("c1"), this._btnClose.onClick(this, this.onTouch, [this._btnClose]), this.contentPane
                .getChild("n0").height = Laya.stage.height, this.contentPane.getChild("n0").width = Laya.stage.width
        }
        show(t) {
            if (super.show({
                    showBanner: !0
                }), this._skinId = t && parseInt(t.skinId) || 0, this._skinId > 0) {
                this._loaderIMG.url = S.Instance.getSkinUrl(this._skinId);
                let t = S.Instance.getSkinIndex(this._skinId);
                t >= 0 && (this._textController.selectedIndex = t)
            }
            if (this._controller.selectedIndex = 0, this._controller.selectedIndex = t.type && t.type || 0, 2 ==
                this._controller.selectedIndex) {
                Laya.timer.clearAll(this);
                let t = Pt.Instance.getSkinEndTime(this._skinId);
                Laya.timer.loop(500, this, this.downTime, [t]), this.downTime(t)
            }
            this._initLvel = t.initLvel
        }
        downTime(t) {
            let e = t - Kt.now;
            e >= 0 ? this._textDownTime.text = Kt.getTimeStr1(e) : (Pt.Instance.setSkinEndTime(this._skinId, 0),
                Laya.timer.clearAll(this))
        }
        setSkinData(t) {
            t && (this._skinData = t)
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose:
                    if (this.hide(), this._skinId > 0 && 2 != this._controller.selectedIndex) {
                        e.TASK_RANGE_LIST.indexOf(this._skinId) >= 0 && !this._initLvel && (Pt.Instance
                                .notLoadScene = !0), Pt.Instance.useSkinId = this._skinId, 0 == this._controller
                            .selectedIndex ? Mt.Instance.unlockAwardSkin() : this._skinData && (this.show(this
                                ._skinData), this._skinData = null);
                        break
                    }
            }
        }
        hide() {
            Laya.timer.clearAll(this), super.hide()
        }
    }
    class mt extends h {
        constructor() {
            super(), this._modelId = 0, this._modelEuler = new Laya.Vector3
        }
        initUI() {
            super.initUI(), this._control = this.contentPane.getController("c1"), this._btnClose = this.contentPane
                .getChild("n2"), this._btnClose1 = this.contentPane.getChild("n6"), this._textTips = this
                .contentPane.getChild("n5"), this._btnVedio = this.contentPane.getChild("n9"), this._btnClose
                .onClick(this, this.onTouch, [this._btnClose]), this._btnClose1.onClick(this, this.onTouch, [this
                    ._btnClose1
                ]), this._btnVedio.onClick(this, this.onTouch, [this._btnVedio]), this.contentPane.getChild("n0")
                .height = Laya.stage.height, this.contentPane.getChild("n0").width = Laya.stage.width
        }
        show(t) {
            if (super.show({
                    showBanner: !1
                }), this._skinId = t && parseInt(t.skinId) || 0, this._skinId) {
                let t = Mt.Instance.getTaskData(this._skinId);
                this._textTips.text = t && t.tips || ""
            }
            let i = Pt.Instance.getSkinVideoTimes(this._skinId);
            this._control.selectedIndex = i > 0 ? 1 : 0;
            let s = e.CAIDAN_VEDIO_TIMES[this._skinId] || 0;
            this._btnVedio.getChild("n15").text = i + "/" + s, t && t.showModel && (this._modelId = this._skinId,
                Laya.timer.clear(this, this.modelRotate), Laya.timer.frameLoop(1, this, this.modelRotate), this
                .loadScene3d())
        }
        loadScene3d() {
            let t = this;
            Laya.Scene3D.load(Yt.SHOP, Laya.Handler.create(this, function(e) {
                t.loadComplet(e)
            }))
        }
        loadComplet(t) {
            this._shopScene = t, this._shopScene.parent || Laya.stage.addChild(t);
            var e = t.getChildByName("Main Camera");
            e && (e.active = !0, e.enableHDR = !1, e.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY), this
                ._skinParent = t.getChildByName("skinParent"), this._skinParent.active = !0, this._skinParent
                .transform.localScale = new Laya.Vector3(6, 6, 6), this._skinParent.transform.rotationEuler =
                new Laya.Vector3(0, -90, 0), this._skinParent.removeChildren(), this._modelId > 0 && this
                .refreshBucketModel(this._modelId)
        }
        refreshModelPos() {
            if (this._skinParent && this._skinParent.numChildren > 0) {
                let t = this._skinParent.getChildAt(0),
                    e = (z.isLiuHaiScreen(), 4.2);
                t.transform.position = new Laya.Vector3(0, e, 0)
            }
        }
        modelRotate() {
            if (this._skinParent && this._skinParent.numChildren > 0) {
                let t = this._skinParent.getChildAt(0),
                    e = t.transform.rotationEuler.y + .8;
                this._modelEuler.setValue(5, e % 360, 0), t.transform.rotationEuler = this._modelEuler
            }
        }
        refreshBucketModel(t) {
            if (this._modelId = t, !this.contentPane.visible || !this._skinParent) return;
            if (!Yt.isLoadServerBullet && Yt.isServerBullet(t)) return;
            this._skinParent.removeChildren();
            let e = Yt.bulletUrl(this._modelId);
            if (Laya.loader.getRes(e)) {
                let t = Laya.Sprite3D.instantiate(Laya.loader.getRes(e));
                for (let e = 0; e < t.numChildren; e++) {
                    let i = t.getChildAt(e);
                    if (i.name.indexOf("FX_Trail") >= 0) {
                        i.active = !1;
                        break
                    }
                }
                this._skinParent.addChild(t), this.refreshModelPos()
            } else Laya.loader.create(e, Laya.Handler.create(this, () => {
                this.refreshBucketModel(this._modelId)
            }))
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose:
                    Laya.stage.event(a.SHOW_CAIDAN_MODEL), this.hide();
                    break;
                case this._btnClose1:
                case this._btnVedio:
                    let i = this;
                    window.adsMgr && window.adsMgr.showVideoAd({
                        success: () => {
                            let t = e.CAIDAN_VEDIO_TIMES[i._skinId] || 0,
                                s = Pt.Instance.getSkinVideoTimes(i._skinId) + 1;
                            Pt.Instance.setSkinVideoTimes(i._skinId, s), i._btnVedio.getChild("n15")
                                .text = s + "/" + t, i._control.selectedIndex = 1, s >= t && (i
                                    ._skinId == e.WUCAI_FENGHUANG ? (Pt.Instance.setSkinUnlock(e
                                            .TASK_FENGHUANG), Pt.Instance.setSkinUnlock(e
                                            .TASK_FENGHUANG_AN), Pt.Instance.setSkinUnlock(e
                                            .TASK_FENGHUANG_BING), Pt.Instance.setSkinUnlock(e
                                            .TASK_FENGHUANG_FENG), Pt.Instance.setSkinUnlock(e
                                            .TASK_FENGHUANG_LEI), Gt.Instance.showUI(nt.Fenghuang), Gt
                                        .Instance.hideUI(nt.CaiDan)) : (Pt.Instance.setSkinUnlock(i
                                        ._skinId), Gt.Instance.showUI(nt.CaiDanUnlock, {
                                        skinId: i._skinId,
                                        type: 1,
                                        initLvel: !0
                                    }), Gt.Instance.hideUI(nt.CaiDan), Gt.Instance.hideUI(nt
                                        .Fenghuang)), i.hide(), Laya.stage.event(a.SHOW_CAIDAN_MODEL))
                        },
                        fail: () => {}
                    })
            }
        }
        clear() {
            Laya.timer.clearAll(this), this._skinParent && this._skinParent.removeChildren(), this._shopScene &&
                this._shopScene.parent && this._shopScene.removeSelf()
        }
        hide() {
            super.hide(), this.clear(), this._skinId = 0
        }
    }
    class St extends fgui.GComponent {
        constructFromXML(t) {
            super.constructFromXML(t)
        }
        set skinId(t) {
            this._skinId = t
        }
        get skinId() {
            return this._skinId
        }
    }
    St.URL = "ui://lgmuflyqqsbuhf";
    class yt extends h {
        constructor() {
            super(), this._iconMap = {}, this._modelEuler = new Laya.Vector3
        }
        initUI() {
            super.initUI(), this._btnClose = this.contentPane.getChild("n14"), this._btnActive = this.contentPane
                .getChild("n3"), this._fenghuangList = [e.TASK_FENGHUANG, e.TASK_FENGHUANG_LEI, e
                    .TASK_FENGHUANG_FENG, e.TASK_FENGHUANG_BING, e.TASK_FENGHUANG_AN
                ];
            for (let t = 0; t < this._fenghuangList.length; t++) {
                let e = this.contentPane.getChild("n" + (4 + t)),
                    i = this._fenghuangList[t];
                e.onClick(this, this.onClickIcon, [i]), this._iconMap[i] = e
            }
            this._btnClose.onClick(this, this.onTouch, [this._btnClose]), this._btnActive.onClick(this, this
                .onTouch, [this._btnActive]), Laya.stage.on(a.SHOW_CAIDAN_MODEL, this, this.showModel)
        }
        firstOpenUI() {
            Laya.stage.on(a.ZIP_BULLET_SUCCESS, this, this.refreshBucketModel, [this._modelId])
        }
        show(t) {
            super.show({
                showBanner: !0
            }), n.Instance.playerFenghuang(), this.loadScene3d(), this._activeCount = 0;
            for (let t in this._iconMap) {
                let e = Pt.Instance.isSkinUnlock(t);
                this._iconMap[t].getController("c1").selectedIndex = e ? 0 : 1, e && this._activeCount++
            }
            let i = Pt.Instance.isSkinUnlock(e.WUCAI_FENGHUANG);
            this._btnActive.getController("c1").selectedIndex = i ? 2 : this._activeCount >= this._fenghuangList
                .length ? 1 : 0
        }
        loadScene3d() {
            let t = this;
            Laya.Scene3D.load(Yt.SHOP, Laya.Handler.create(this, function(e) {
                t.loadComplet(e)
            }))
        }
        loadComplet(t) {
            this._shopScene = t, this._shopScene.parent || Laya.stage.addChild(t);
            var e = t.getChildByName("Main Camera");
            e && (e.active = !0, e.enableHDR = !1, e.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY), this
                ._skinParent = t.getChildByName("skinParent"), this._skinParent.active = !0, this._skinParent
                .transform.localScale = new Laya.Vector3(6, 6, 6), this._skinParent.transform.rotationEuler =
                new Laya.Vector3(0, -90, 0), this._skinParent.removeChildren()
        }
        refreshBucketModel(t) {
            if (this._modelId = t, !this.contentPane.visible || !this._skinParent) return;
            if (!Yt.isLoadServerBullet && Yt.isServerBullet(t)) return;
            this._skinParent.removeChildren();
            let e = Yt.bulletUrl(t);
            if (Laya.loader.getRes(e)) {
                let t = Laya.Sprite3D.instantiate(Laya.loader.getRes(e));
                for (let e = 0; e < t.numChildren; e++) {
                    let i = t.getChildAt(e);
                    if (i.name.indexOf("FX_Trail") >= 0) {
                        i.active = !1;
                        break
                    }
                }
                this._skinParent.addChild(t);
                let i = (z.isLiuHaiScreen(), 4.6);
                t.transform.position = new Laya.Vector3(0, i, 0), Laya.timer.clear(this, this.modelRotate), Laya
                    .timer.frameLoop(1, this, this.modelRotate)
            } else Laya.loader.create(e, Laya.Handler.create(this, () => {
                this.refreshBucketModel(t)
            }))
        }
        modelRotate() {
            if (this._skinParent && this._skinParent.numChildren > 0) {
                let t = this._skinParent.getChildAt(0),
                    e = t.transform.rotationEuler.y + .8;
                this._modelEuler.setValue(5, e % 360, 0), t.transform.rotationEuler = this._modelEuler
            }
        }
        showModel() {
            this.contentPane.visible && this._skinParent && this._skinParent.numChildren > 0 && this._skinParent
                .removeChildren()
        }
        onClickIcon(t) {
            if (Pt.Instance.isSkinUnlock(t)) return;
            if (Pt.Instance.isCaidanTipsUnlock(t)) return void this.getVidioAward(!0, t);
            let e = Yt.bulletUrl(t);
            Laya.loader.getRes(e) || Laya.loader.create(e, Laya.Handler.create(this, () => {
                console.log("loaded success url:" + e)
            })), this.seeAdVidio(t)
        }
        seeAdVidio(t) {
            var e = this;
            window.adsMgr && window.adsMgr.showVideoAd({
                success: function() {
                    Pt.Instance.setCaidanTipsUnlock(t), e.getVidioAward(!0, t)
                },
                fail: function() {}
            })
        }
        getVidioAward(t, e) {
            t && (this.refreshBucketModel(e), Gt.Instance.showUI(nt.CaiDanTanchuang, {
                skinId: e
            }))
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose:
                    this.hide();
                    break;
                case this._btnActive:
                    if (0 == this._btnActive.getController("c1").selectedIndex) return void _.show(
                        "Collect five Elements to unlock The God Phoenix");
                    1 == this._btnActive.getController("c1").selectedIndex && (n.Instance.playerFenghuang(), this
                        ._btnActive.getController("c1").selectedIndex = 2, Pt.Instance.setSkinUnlock(e
                            .WUCAI_FENGHUANG), _.show("Congrats! Unlocking The God Phoenix"), Laya.stage.event(a.UNLOCK_WUCAIFENGHUANG))
            }
        }
        clear() {
            Laya.timer.clearAll(this), this._skinParent && this._skinParent.removeChildren(), this._shopScene &&
                this._shopScene.parent && this._shopScene.removeSelf()
        }
        hide() {
            super.hide(), this.clear()
        }
    }
    class Lt extends h {
        constructor() {
            super(), this._iconMap = {}, this._level = [0, 6, 11, 31], this._selectIndex = 0
        }
        initUI() {
            super.initUI(), this._mapLevelList = [
                [3, 4, 5, 18, 19, 22, 23, 26, 27],
                [6, 7, 8, 9, 10, 16, 17, 20, 24, 25],
                [11, 12, 13, 14, 15, 21, 28, 29, 30],
                [31, 32, 33, 34, 35]
            ], this._btnClose = this.contentPane.getChild("n2"), this._btnVideo = this.contentPane.getChild(
                "n7"), this._btnGold = this.contentPane.getChild("n8"), this._mapIndexList = [1, 2, 3, 4];
            for (let t = 0; t < this._mapIndexList.length; t++) {
                let e = this.contentPane.getChild("n" + (3 + t));
                e.getChild("n3").text = this._level[t] + "";
                let i = this._mapIndexList[t];
                this._iconMap[i] = e, e.onClick(this, this.onClickIcon, [e, i]), 0 == t && (this._currIcon = e, this
                    ._currIcon.getController("c1").selectedIndex = 1, this._selectIndex = i)
            }
            this._btnGold.getChild("n2").text = e.SEE_VIDEO_ADD_GOLD + "", this._btnClose.onClick(this, this
                    .onTouch, [this._btnClose]), this._btnVideo.onClick(this, this.onTouch, [this._btnVideo]), this
                ._btnGold.onClick(this, this.onTouch, [this._btnGold])
        }
        show(t) {
            super.show({
                showBanner: !1
            });
            for (let t in this._iconMap) {
                let e = this._iconMap[t],
                    i = Pt.Instance.level >= this._level[parseInt(t) - 1];
                e.getController("c1").selectedIndex = i ? 0 : 2
            }
            this._selectIndex > 0 && this._currIcon && this.onClickIcon(this._currIcon, this._selectIndex)
        }
        onClickIcon(t, i) {
            n.Instance.playButton(), !e.isDebug && Pt.Instance.level < this._level[i - 1] ? _.show("Level " + this
                ._level[i - 1] + " Unlock") : (this._currIcon.getController("c1").selectedIndex = 0, this
                ._selectIndex = i, this._currIcon = t, this._currIcon.getController("c1").selectedIndex = 1)
        }
        sendMap(t) {
            if (4 != this._selectIndex || Yt.isLoadServerScene)
                if (e.isDebug) this.enterMap();
                else if (!this._currIcon || this._selectIndex <= 0) _.show("Please select a map");
            else if (0 == t) {
                if (Pt.Instance.gold < e.SEE_VIDEO_ADD_GOLD) return void _.show("Not enough Gold");
                Pt.Instance.changeGold(-e.SEE_VIDEO_ADD_GOLD), this.enterMap()
            } else {
                if (e.isDebug) return void this.enterMap();
                let t = this;
                window.adsMgr && window.adsMgr.showVideoAd({
                    success: () => {
                        t.enterMap()
                    },
                    fail: () => {}
                })
            } else _.show("Please wait, loading resource")
        }
        enterMap() {
            let t = this._mapLevelList[this._selectIndex - 1],
                e = r.randomArray(t);
            Laya.stage.offAll(a.SCENE_INIT_COMPLET), Laya.stage.on(a.SCENE_INIT_COMPLET, this, this.enterFinish), Gt
                .Instance.showUI(nt.SceneLoading), D.Instance.resetGame(e)
        }
        enterFinish() {
            Laya.stage.off(a.SCENE_INIT_COMPLET, this, this.enterFinish), this.hide(), Gt.Instance.hideUI(nt.Hall),
                Gt.Instance.showUI(nt.Game), Gt.Instance.hideUI(nt.SceneLoading)
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose:
                    this.hide();
                    break;
                case this._btnVideo:
                    this.sendMap(1);
                    break;
                case this._btnGold:
                    this.sendMap(0)
            }
        }
        hide() {
            super.hide()
        }
    }
    class pt extends h {
        constructor() {
            super()
        }
        initUI() {
            super.initUI(), this.txtfile = this.contentPane.getChild("title"), this.contentPane.getChild("n0")
                .height = Laya.stage.height, this.contentPane.getChild("n0").width = Laya.stage.width
        }
        show(t) {
            super.show({
                showBanner: !1
            }), t && t.txt && (this.txtfile.text = t.txt)
        }
        hide() {
            super.hide()
        }
    }
    class ft extends h {
        constructor() {
            super(), this._isShare = !1
        }
        initUI() {
            super.initUI(), this._btnClose = this.contentPane.getChild("n5"), this._loader = this.contentPane
                .getChild("n8"), this._control = this.contentPane.getController("c1"), this._btnOk = this
                .contentPane.getChild("n2"), this._controlBtn = this.contentPane.getChild("n2").getController("c1"),
                this.contentPane.y += 50, this._btnClose.onClick(this, this.onTouch, [this._btnClose]), this._btnOk
                .onClick(this, this.onTouch, [this._btnOk])
        }
        show(t) {
            super.show({
                    showBanner: !1
                }), this._isShare = !1, this._isDIY = t.isDIY, this._AIFaceIndex = t.AIFaceIndex, this._control
                .selectedIndex = 0, this._controlBtn.selectedIndex = 0
        }
        addScene3d() {
            let t = Gt.Instance.getUI(nt.Huaban).getScene3d();
            t && (t.removeSelf(), this._loader.displayObject.addChild(t))
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose:
                    Gt.Instance.getUI(nt.Huaban).showModel(!0), this.hide();
                    break;
                case this._btnOk:
                    if (1 == this._controlBtn.selectedIndex) return void this.changeGirlFace();
                    if (0 == this._controlBtn.selectedIndex) {
                        let t = this;
                        window.adsMgr && window.adsMgr.showVideoAd({
                            success: () => {
                                t.changeGirlFace()
                            },
                            fail: () => {}
                        })
                    } else 2 == this._controlBtn.selectedIndex && (this._isShare || (this._isShare = !0, Ht.Ins
                        .shareRecord(this.shareRecordCallBack.bind(this))))
            }
        }
        shareRecordCallBack(t, e) {
            if (this._isShare = !1, t) return console.log("Recording and sharing successfully"), void this.changeGirlFace();
            e && _.show("Screen record failed: Time is less than 3 seconds"), this._control.selectedIndex = 0, this._controlBtn.selectedIndex = 0
        }
        changeGirlFace() {
            this._isDIY ? (Pt.Instance.useAIFaceIndex = this._AIFaceIndex, Pt.Instance.drawPoints = Gt.Instance
                    .getUI(nt.Huaban).getTempPoints()) : (Pt.Instance.useAIFaceIndex = this._AIFaceIndex, Pt
                    .Instance.drawPoints = []), Laya.stage.event(a.CHANGE_GIRL_FACE), Gt.Instance.hideUI(nt.Huaban),
                this.hide()
        }
        hide() {
            super.hide()
        }
    }
    class Ct extends h {
        constructor() {
            super(), this._currAniIndex = 0
        }
        initUI() {
            super.initUI(), this._btnClose = this.contentPane.getChild("n0"), this._btnDIY = this.contentPane
                .getChild("n7"), this._btnAI = this.contentPane.getChild("n8"), this._btnOk = this.contentPane
                .getChild("n5"), this._btnRefresh = this.contentPane.getChild("n14"), this._loader = this
                .contentPane.getChild("n15"), this._control = this.contentPane.getController("c1"), this.contentPane
                .getChild("n4").visible = !1, this._AIList = this.contentPane.getChild("n10").asList, this._AIList
                .itemRenderer = Laya.Handler.create(this, this.setAIItemData, null, !1), this._AIList.on(fgui.Events
                    .CLICK_ITEM, this, this.onClickAIItem), this._btnClose.onClick(this, this.onTouch, [this
                    ._btnClose
                ]), this._btnDIY.onClick(this, this.onTouch, [this._btnDIY]), this._btnAI.onClick(this, this
                    .onTouch, [this._btnAI]), this._btnOk.onClick(this, this.onTouch, [this._btnOk]), this
                ._btnRefresh.onClick(this, this.onTouch, [this._btnRefresh]), Laya.stage.on(a.USE_AIFACE, this, this
                    .onUseAIFace)
        }
        show(t) {
            super.show({
                showBanner: !1
            }), this._AIList.numItems = 5, this.loadScene3d(), this.onTouch(this._btnDIY), Laya.timer.frameOnce(
                2, this, this.onUseAIFace)
        }
        loadScene3d() {
            let t = this;
            Laya.Scene3D.load(Yt.SHOP, Laya.Handler.create(this, function(e) {
                t.loadComplet(e)
            }))
        }
        addScene3d() {
            this._shopScene && (this._shopScene.removeSelf(), Laya.stage.addChild(this._shopScene))
        }
        loadComplet(t) {
            if (this._shopScene = t, this.addScene3d(), !this._camera) {
                this._camera = t.getChildByName("Main Camera").clone(), this._camera.active = !0, this._camera
                    .enableHDR = !1, this._camera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY;
                let e = 0,
                    i = 0;
                Laya.Browser.onQQBrowser || Laya.Browser.onPC || Laya.Browser.onIE || Laya.Browser.onEdge || Laya
                    .Browser.onFirefox ? (console.log("Browser Opened"), e = 100) : Laya.Browser.onAndroid || Laya.Browser
                    .onIPhone ? (console.log("Mobile Device"), e = 450, i = 200) : Laya.Browser.onIOS && Laya.Browser
                    .onIPad ? (console.log("Pad Device"), e = 450, i = 200) : console.log("Other Devices"), this._camera
                    .viewport = new Laya.Viewport(e, i, this._loader.width, this._loader.height), this._camera
                    .fieldOfView = 5
            }
            this._camera.parent || this._shopScene.addChild(this._camera), t.getChildByName("Main Camera")
                .active = !1, this._skinParent = t.getChildByName("skinParent"), this._skinParent.transform
                .position = new Laya.Vector3(0, 0, 0), this._skinParent.transform.localScale = new Laya.Vector3(1,
                    1, 1), this._skinParent.transform.rotationEuler = new Laya.Vector3(0, 0, 0), this._skinParent
                .removeChildren(), this.refresModel()
        }
        refresModel() {
            this._skinParent.removeChildren();
            let t = Yt.GirlURL();
            if (Laya.loader.getRes(t)) {
                this._girl = Laya.Sprite3D.instantiate(Laya.loader.getRes(t)), this._girl.transform.position =
                    new Laya.Vector3(0, -.5, 0), this._girl.transform.localScale = new Laya.Vector3(1, 1, 1), this
                    ._girl.transform.localRotationEuler = new Laya.Vector3(0, 180, 0), this._skinParent.addChild(
                        this._girl), this._girl.getChildByName("Bip001").getChildByName("Bip001 Pelvis")
                    .getChildByName("Bip001 Spine").getChildByName("Bip001 Spine1").getChildByName("Bip001 Neck")
                    .getChildByName("Bip001 R Clavicle").getChildByName("Bip001 R UpperArm").getChildByName(
                        "Bip001 R Forearm").getChildByName("Bip001 R Hand").getChildByName("fazhang").active = 4 ==
                    this._faceIndex && Pt.Instance.isSkinUnlock(e.TASK_BINGFAZHANG), this.refreshFace(this
                        ._faceIndex), this._ani = this._girl.getComponent(Laya.Animator), this._headAni = this._girl
                    .getChildByName("7x_girl_head_5").getComponent(Laya.Animator), this.playAni(), this.showModel(!
                        0), this._mesh = this._girl.getChildByName("7x_girl_head_0");
                let i = this.contentPane.getChild("n4");
                this._drawSprite = L.Instance, this._drawSprite.setInfo(i.x, i.y), this._drawSprite.show({
                    mesh: this._mesh
                }), this._drawSprite.parent || Laya.stage.addChild(this._drawSprite)
            } else Laya.loader.create(t, Laya.Handler.create(this, () => {
                this.refresModel()
            }))
        }
        playAni() {
            if (!this._ani) return;
            Laya.timer.clear(this, this.playAni);
            let t = ["1", "2", "3", "4", "5", "6"],
                e = t[this._currAniIndex],
                i = this._girl.getChildByName("FX_emoji");
            i && (i.active = !1), this._ani.crossFade(e, 0, 0), this._headAni && this._headAni.crossFade(e, 0, 0),
                this._currAniIndex++, this._currAniIndex = this._currAniIndex % t.length, Laya.timer.once(5e3, this,
                    this.playAni)
        }
        refreshFace(t) {
            if (this._faceIndex = t, this._girl) {
                if (t >= 0) this._girl.getChildByName("7x_girl_body").active = !0, this._girl.getChildByName(
                        "7x_girl_eyes_1").active = 0 == t || 1 == t || 4 == t, this._girl.getChildByName(
                        "7x_girl_eyes_3").active = 2 == t, this._girl.getChildByName("7x_girl_eyes_4").active = 3 ==
                    t, this._girl.getChildByName("7x_girl_hair_0").active = !1, this._girl.getChildByName(
                        "7x_girl_hair_2").active = !1, this._girl.getChildByName("7x_girl_hair_3").active = !1, this
                    ._girl.getChildByName("7x_girl_hair_4").active = !1, this._girl.getChildByName("7x_girl_hair_5")
                    .active = !1, this._girl.getChildByName("7x_girl_head_0").active = !1, this._girl
                    .getChildByName("7x_girl_head_1").active = 0 == t, this._girl.getChildByName("7x_girl_head_2")
                    .active = 1 == t, this._girl.getChildByName("7x_girl_head_3").active = 2 == t, this._girl
                    .getChildByName("7x_girl_head_4").active = 3 == t, this._girl.getChildByName("7x_girl_head_5")
                    .active = 4 == t;
                else {
                    let t = this._currItem && this._currItem.isSelectUse && this._currItem.index || -1;
                    this._girl.getChildByName("7x_girl_body").active = !0, this._girl.getChildByName(
                            "7x_girl_eyes_1").active = !1, this._girl.getChildByName("7x_girl_eyes_3").active = !1,
                        this._girl.getChildByName("7x_girl_eyes_4").active = !1, this._girl.getChildByName(
                            "7x_girl_hair_0").active = 0 == t || -1 == t, this._girl.getChildByName(
                            "7x_girl_hair_2").active = 1 == t, this._girl.getChildByName("7x_girl_hair_3").active =
                        2 == t, this._girl.getChildByName("7x_girl_hair_4").active = 3 == t, this._girl
                        .getChildByName("7x_girl_hair_5").active = 4 == t, this._girl.getChildByName(
                            "7x_girl_head_0").active = !0, this._girl.getChildByName("7x_girl_head_1").active = !1,
                        this._girl.getChildByName("7x_girl_head_2").active = !1, this._girl.getChildByName(
                            "7x_girl_head_3").active = !1, this._girl.getChildByName("7x_girl_head_4").active = !1,
                        this._girl.getChildByName("7x_girl_head_5").active = !1
                }
                this.playAni()
            }
        }
        setAIItemData(t, e) {
            e.setIndex(t)
        }
        onClickAIItem(t) {
            if (this._currItem && this._currItem.select(!1), this._currItem = t, this._currItem.select(!0), this
                ._currItem.isUnlock) 1 == this._currItem._statusControl.selectedIndex && (this._currItem.selectUse(!
                0), this.onUseAIFace({
                index: this._currItem.index
            }));
            else {
                let t = this;
                window.adsMgr && window.adsMgr.showVideoAd({
                    success: () => {
                        Pt.Instance.setAIFaceUnlock(t._currItem.index), t._currItem.setIndex(t._currItem
                            .index), t._currItem.selectUse(!0), t.onUseAIFace({
                            index: this._currItem.index
                        })
                    },
                    fail: () => {}
                })
            }
        }
        onUseAIFace(t) {
            this._currItem && this._currItem.select(!1), this._currItem = null;
            for (var e = 0; e < this._AIList.numItems; e++) {
                let i = this._AIList.getChildAt(e);
                t && t.index == i.index ? this._currItem = i : t || i.index != Pt.Instance.useAIFaceIndex ? i
                    .changeUseStatus(!1) : this._currItem = i
            }
            this._currItem && (this._currItem.select(!0), this._currItem.changeUseStatus(!0));
            let i = 1 == this._control.selectedIndex && this._currItem && this._currItem.isSelectUse ? this
                ._currItem.index : -1;
            this.refreshFace(i)
        }
        showModel(t) {
            this._drawSprite && this._drawSprite.showSprite(t), t && 0 == this._control.selectedIndex && this
                ._drawSprite && this._drawSprite.addEvent()
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose:
                    this.hide();
                    break;
                case this._btnRefresh:
                    this._drawSprite && this._drawSprite.clearDraw();
                    break;
                case this._btnDIY:
                    this._btnDIY.selected = !0, this._btnAI.selected = !1, this._control.selectedIndex = 0, this
                        ._drawSprite && (this._drawSprite.visible = !0, this._drawSprite.addEvent(), this
                            ._drawSprite.showDIYFace()), this.refreshFace(-1);
                    break;
                case this._btnAI:
                    this._btnAI.selected = !0, this._btnDIY.selected = !1, this._control.selectedIndex = 1, this
                        ._drawSprite && (this._drawSprite.visible = !1, this._drawSprite.showAIFace(), this
                            ._drawSprite.removeEvent()), this.onUseAIFace();
                    break;
                case this._btnOk:
                    if (0 == this._control.selectedIndex) {
                        if (!this._drawSprite.getTempPoints() || 0 == this._drawSprite.getTempPoints().length)
                            return void _.show("Choose a friend", Laya.stage.width / 2, 587)
                    } else if (!this._currItem || !this._currItem.isSelectUse) return void _.show("Choose a friend", Laya
                        .stage.width / 2, 587);
                    Ht.Ins.stopRecord(), this._drawSprite.removeEvent(), this.showModel(!1);
                    let e = this._currItem && this._currItem.isSelectUse ? this._currItem.index : -1;
                    this._control.selectedIndex, Gt.Instance.showUI(nt.Huaban_tanchuang, {
                        isDIY: 0 == this._control.selectedIndex,
                        AIFaceIndex: e
                    })
            }
        }
        getTempPoints() {
            return this._drawSprite.getTempPoints()
        }
        getScene3d() {
            return this._shopScene
        }
        clear() {
            Ht.Ins.stopRecord(), this._mesh = null, this._drawSprite && this._drawSprite.removeUI(), Laya.timer
                .clearAll(this), this._skinParent && this._skinParent.removeChildren(), this._shopScene && this
                ._shopScene.parent && this._shopScene.removeSelf(), this._girl && this._girl.destroy(), this._girl =
                null, this._camera && this._camera.removeSelf()
        }
        hide() {
            super.hide(), this.clear()
        }
    }
    class At extends fgui.GComponent {
        constructor() {
            super(...arguments), this._index = 0
        }
        constructFromXML(t) {
            super.constructFromXML(t), this._control = this.getController("c1"), this._imgLoader = this
                .getChild("n5").asLoader, this._btnVideo = this.getChild("n4"), this._statusControl = this
                ._btnVideo.getController("c1")
        }
        setIndex(t) {
            this._index = t, this._imgLoader.url = At.AI_URL_LIST[t], this._control.selectedIndex = 0, this
                .isUnlock ? this._statusControl.selectedIndex = 1 : this._statusControl.selectedIndex = 0
        }
        select(t) {
            this._control.selectedIndex = t ? 1 : 0
        }
        changeUseStatus(t) {
            this.isUnlock ? this._statusControl.selectedIndex = t ? 2 : 1 : this._statusControl.selectedIndex =
                0
        }
        selectUse(t) {
            this.changeUseStatus(t)
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnVideo:
                    if (this.isUnlock) 1 == this._statusControl.selectedIndex && this.selectUse(!0);
                    else {
                        let t = this;
                        window.adsMgr && window.adsMgr.showVideoAd({
                            success: () => {
                                Pt.Instance.setAIFaceUnlock(t.index), t.setIndex(t.index), t
                                    .selectUse(!0)
                            },
                            fail: () => {}
                        })
                    }
            }
        }
        get index() {
            return this._index
        }
        get isUnlock() {
            return Pt.Instance.isAIFaceUnlock(this.index)
        }
        get isSelectUse() {
            return 2 == this._statusControl.selectedIndex
        }
    }
    At.URL = "ui://lgmuflyqicpeud", At.AI_URL_LIST = ["ui://lgmuflyqodvvup", "ui://lgmuflyqodvvuo",
        "ui://lgmuflyqodvvun", "ui://lgmuflyqodvvum", "ui://lgmuflyqqd0ex8"
    ];
    class wt extends h {
        constructor() {
            super(), this._surFloat = 0, this._fishIndex = 1
        }
        initUI() {
            super.initUI(), this._btnClose = this.contentPane.getChild("n3"), this._btnVedio = this.contentPane
                .getChild("n2"), this._control = this.contentPane.getChild("n1").getController("c1"), this
                ._fishLoader = this.contentPane.getChild("n6"), this._floatTxt = this.contentPane.getChild("n5")
                .getChild("n3"), this._nameLoader = this.contentPane.getChild("n1").getChild("n12"), this._lenTxt =
                this.contentPane.getChild("n1").getChild("n9"), this._costTxt = this.contentPane.getChild("n1")
                .getChild("n10"), this._lenTxt.width += 50, this._lenTxt.y -= 10, this._costTxt.y -= 10, this
                ._btnClose.onClick(this, this.onTouch, [this._btnClose]), this._btnVedio.onClick(this, this.onTouch,
                    [this._btnVedio])
        }
        show(t) {
            super.show({
                    showBanner: !1
                }), this._surFloat = t && t.floatNum || 0, this._fishIndex = t && t.fishIndex || 1, this._floatTxt
                .text = this._surFloat + "/" + O.FLOAT_COUNT;
            let e = O.FISH_MESH_LIST[this._fishIndex - 1];
            this._fishLoader.url = e && e.url, this._nameLoader.url = e && e.name;
            let i = 0,
                s = 0,
                n = O.TOTAL_HIGH_FISH_LIST.indexOf(this._fishIndex) >= 0,
                a = O.FISH_LENGTH_MAP[n ? "high" : "low"];
            s = r.limit(a[0], a[1]), s = Math.floor(100 * s) / 100, t && t.logicLength && (s = Math.floor(100 * t
                .logicLength) / 100);
            let o = O.FISH_PRICE_MAP[n ? "high" : "low"];
            i = o[0] + Math.floor((o[1] - o[0]) * ((s - a[0]) / (a[1] - a[0]))), this._lenTxt.text = s + " in", this
                ._costTxt.text = i + "", console.log("isHigh:", n, ",length:", s, ",cost:", i);
            let h = Pt.Instance.isFishingMeshUnlock(this._fishIndex);
            this._control.selectedIndex = h ? 0 : 1, Pt.Instance.setFishingMeshUnlock(this._fishIndex)
        }
        nextFishing() {
            this._surFloat > 0 ? O.Instance.goFishing(O.Instance.fishingMapIndex) : (V.Instance.goJiayuan(), Laya
                .timer.frameOnce(5, this, () => {
                    Gt.Instance.showUI(nt.Dituxuanze)
                }))
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose:
                    Pt.Instance.changeStarCoin(this._costTxt.text), this.hide(), this.nextFishing();
                    break;
                case this._btnVedio:
                    let e = this;
                    window.adsMgr && window.adsMgr.showVideoAd({
                        success: () => {
                            Pt.Instance.changeStarCoin(3 * parseInt(this._costTxt.text)), e.hide(), e
                                .nextFishing()
                        },
                        fail: () => {}
                    })
            }
        }
        hide() {
            super.hide()
        }
    }
    class Tt extends fgui.GComponent {
        constructFromXML(t) {
            super.constructFromXML(t), this._loader = this.getChild("n3").asLoader, this._control = this
                .getController("c1")
        }
        setData(t) {
            let e = O.FISH_MESH_LIST[t - 1];
            this._loader.url = e && e.url;
            let i = Pt.Instance.isFishingMeshUnlock(t);
            this._control.selectedIndex = i ? 0 : 1
        }
    }
    Tt.URL = "ui://76nl9vqqq1hu6m";
    class kt extends fgui.GComponent {
        constructFromXML(t) {
            super.constructFromXML(t), this._starCoinText = this.getChild("n3").asTextField, this._addCoinText =
                this.getChild("n4").asTextField, this._ani = this.getTransition("t1"), this._ani.stop(), Laya
                .stage.on(a.EVENT_UPDATE_STARCOIN, this, this.updateStarCoin), this.updateStarCoin(0)
        }
        updateStarCoin(t) {
            this._starCoinText.text = Pt.Instance.starCoin + "", t > 0 && (this._addCoinText.text = t + "", this
                ._ani.play(null, 1))
        }
    }
    kt.URL = "ui://76nl9vqqpkk85m";
    class Et extends h {
        constructor() {
            super(), this._selectIndex = 0
        }
        initUI() {
            super.initUI(), this._btnClose = this.contentPane.getChild("n5"), this._txtHF = this.contentPane
                .getChild("n17"), this._txtAllHF = this.contentPane.getChild("n18"), this._control = this
                .contentPane.getController("c1"), this._txtTL = this.contentPane.getChild("n10").getChild("n3"),
                this._btnAddTL = this.contentPane.getChild("n10").getChild("n4"), this._btnYugan = this.contentPane
                .getChild("n11"), this._btnTQ = this.contentPane.getChild("n12"), this._btnOk = this.contentPane
                .getChild("n8"), this._btnClose1 = this.contentPane.getChild("n21"), this._mapList = this
                .contentPane.getChild("n13"), this._mapList.itemRenderer = Laya.Handler.create(this, this
                    .mapItemListData, null, !1), this._mapList.on(fgui.Events.CLICK_ITEM, this, this
                .onClickMapItem), this._yuganList = this.contentPane.getChild("n20").getChild("n4"), this._yuganList
                .itemRenderer = Laya.Handler.create(this, this.yuganItemListData, null, !1), this._yuganList.on(fgui
                    .Events.CLICK_ITEM, this, this.onClickYuganItem), this._btnClose.onClick(this, this.onTouch, [
                    this._btnClose
                ]), this._btnClose1.onClick(this, this.onTouch, [this._btnClose1]), this._btnAddTL.onClick(this,
                    this.onTouch, [this._btnAddTL]), this._btnYugan.onClick(this, this.onTouch, [this._btnYugan]),
                this._btnTQ.onClick(this, this.onTouch, [this._btnTQ]), this._btnOk.onClick(this, this.onTouch, [
                    this._btnOk
                ])
        }
        show(t) {
            super.show({
                    showBanner: !1
                }), this._selectIndex = 0, this._control.selectedIndex = 0, this._mapList.numItems = 3, this
                .refreshTili(), Laya.timer.frameLoop(1, this, this.updateTiliTime)
        }
        mapItemListData(t, e) {
            let i = t + 1;
            e.mapIndex = i + "", e.getController("c1").selectedIndex = t, e.getController("c2").selectedIndex = 1;
            let s = O.FISH_MAP_TILI[i];
            e.getChild("n10").text = s + ""
        }
        onClickMapItem(t) {
            for (var e = 0; e < this._mapList.numItems; e++) {
                this._mapList.getChildAt(e).getController("c2").selectedIndex = 1
            }
            t.getController("c2").selectedIndex = 0, this._selectIndex = t.mapIndex
        }
        refreshYugan() {
            this._yuganList.numItems = 3;
            for (var t = 0; t < this._yuganList.numItems; t++) {
                let e = this._yuganList.getChildAt(t);
                if (e.isUsing) {
                    this._yuganList.scrollToView(e.index);
                    break
                }
            }
        }
        yuganItemListData(t, e) {
            e.setDate(t)
        }
        onClickYuganItem(t) {
            if (t.isUnlock) {
                t.useYugan();
                for (var e = 0; e < this._yuganList.numItems; e++) {
                    this._yuganList.getChildAt(e).refresh()
                }
            } else _.show("The fishing rod is locked"), Gt.Instance.showUI(nt.Jiayuanshangdian)
        }
        sendFishingMap() {
            if (0 == this._selectIndex) return void _.show("Please select a map");
            let t = Pt.Instance.fishingTili,
                e = O.FISH_MAP_TILI[this._selectIndex];
            if (t < e) return void _.show("Not enough stamina");
            if (window.qg && !V.Instance.fishingZipLoaded) return void _.show("Please wait, loading resource");
            Pt.Instance.changeFishingTili(-e), Pt.Instance.fishingTili < O.FISHING_TILI && (Pt.Instance
                .fishingRecoverTime <= 0 ? Pt.Instance.fishingRecoverTime = Kt.now + e * O.tili_time : Pt
                .Instance.fishingRecoverTime += e * O.tili_time), this.refreshTili(), Laya.timer.clear(this,
                this.updateTiliTime), Laya.timer.frameLoop(1, this, this.updateTiliTime);
            let i = 2 == this._selectIndex ? 3 : 3 == this._selectIndex ? 2 : 1;
            O.Instance.goFishing(i, !0)
        }
        updateTiliTime() {
            if (Pt.Instance.fishingTili >= O.FISHING_TILI) return this.refreshTili(), Pt.Instance
                .fishingRecoverTime = 0, void Laya.timer.clear(this, this.updateTiliTime);
            let t = Kt.now,
                e = Pt.Instance.fishingRecoverTime,
                i = O.FISHING_TILI - Pt.Instance.fishingTili;
            if (e <= t) return Pt.Instance.changeFishingTili(i), this.refreshTili(), void Laya.timer.clear(this,
                this.updateTiliTime);
            let s = e - (i - 1) * O.tili_time - t;
            (s = Math.max(s, 0)) <= 0 && (Pt.Instance.changeFishingTili(1), this.refreshTili()), this._txtHF.text =
                Kt.getTimeStr1(s);
            let n = e - t;
            (n = Math.max(n, 0)) >= 0 ? this._txtAllHF.text = Kt.getTimeStr1(n) : (Pt.Instance.changeFishingTili(i),
                this.refreshTili(), Laya.timer.clear(this, this.updateTiliTime))
        }
        refreshTili() {
            this._txtTL.text = Pt.Instance.fishingTili + "/" + O.FISHING_TILI, Pt.Instance.fishingTili >= O
                .FISHING_TILI && (this._txtHF.text = "Full Stamina", this._txtAllHF.text = "Full Stamina")
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose1:
                    this._control.selectedIndex = 0;
                    break;
                case this._btnClose:
                    V.Instance.resetEvent(), this.hide();
                    break;
                case this._btnAddTL:
                    window.adsMgr && window.adsMgr.showVideoAd({
                        success: () => {
                            Pt.Instance.changeFishingTili(3), this.refreshTili()
                        },
                        fail: () => {}
                    });
                    break;
                case this._btnTQ:
                    Gt.Instance.showUI(nt.Yuleitujian);
                    break;
                case this._btnOk:
                    this.sendFishingMap();
                    break;
                case this._btnYugan:
                    this._control.selectedIndex = 1, this.refreshYugan()
            }
        }
        hide() {
            Laya.timer.clearAll(this), super.hide()
        }
    }
    class Ut extends h {
        constructor() {
            super()
        }
        initUI() {
            super.initUI(), this._btnClose = this.contentPane.getChild("n6"), this._list = this.contentPane
                .getChild("n3"), this._list.itemRenderer = Laya.Handler.create(this, this.setListItemData, null, !
                1), this._btnClose.onClick(this, this.onTouch, [this._btnClose])
        }
        show(t) {
            super.show({
                showBanner: !1
            }), this._list.numItems = 3
        }
        setListItemData(t, e) {
            e.enabled = !1, e.grayed = !1, e.getController("c1").selectedIndex = t;
            let i = O.FISH_MESH_MAP[t + 1],
                s = e.getChild("n7");
            s.itemRenderer = Laya.Handler.create(this, this.setSubListItemData, [i], !1), s.numItems = i.length
        }
        setSubListItemData(t, e, i) {
            i.setData(t[e])
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose:
                    this.hide()
            }
        }
        hide() {
            super.hide()
        }
    }
    class Nt extends fgui.GComponent {
        constructFromXML(t) {
            super.constructFromXML(t), this._control = this.getController("c1"), this._nameControl = this
                .getChild("n8").getController("c1"), this._yuganControl = this.getChild("n11").getController(
                    "c1")
        }
        setDate(t) {
            this._index = t, this.refresh(), this._nameControl.selectedIndex = this.yuganSkin - 1, this
                ._yuganControl.selectedIndex = this.yuganSkin - 1
        }
        refresh() {
            this._control.selectedIndex = this.isUnlock ? 1 : 2, this.isUsing && (this._control.selectedIndex =
                0)
        }
        useYugan() {
            !this.isUsing && this.isUnlock && (Pt.Instance.useYuganIndex = this.yuganSkin, this._control
                .selectedIndex = 0)
        }
        get yuganSkin() {
            return this._index + 1
        }
        get index() {
            return this._index
        }
        get isUnlock() {
            return Pt.Instance.isYuganUnlock(this.yuganSkin)
        }
        get isUsing() {
            return Pt.Instance.useYuganIndex == this.yuganSkin
        }
    }
    Nt.URL = "ui://76nl9vqqq1hu6i";
    class vt extends h {
        constructor() {
            super(), this._yuganList = [], this.LIBAO_LIST = [{
                skinId: 1002,
                cost: "600"
            }, {
                skinId: 1003,
                cost: "700"
            }, {
                skinId: 1004,
                cost: "800"
            }, {
                skinId: 1005,
                cost: "900"
            }]
        }
        initUI() {
            super.initUI(), this._btnClose = this.contentPane.getChild("n5"), this._btnUnlock = this.contentPane
                .getChild("n18"), this._btnVedio = this.contentPane.getChild("n19"), this._btnVedio.getChild("n3")
                .text = O.VIDEO_ADD_STAR_COIN + "", this._libaoList = this.contentPane.getChild("n20"), this
                ._libaoList.itemRenderer = Laya.Handler.create(this, this.libaoListData, null, !1), this._libaoList
                .on(fgui.Events.CLICK_ITEM, this, this.onClickLibaoItem);
            let t = O.YUGAN_LIST;
            for (let e = 0; e < 3; e++) {
                let i = t[e],
                    s = this.contentPane.getChild("n" + (12 + e));
                s.index = e, s.getChild("n8").getController("c1").selectedIndex = e, s.getChild("n11")
                    .getController("c1").selectedIndex = e, s.getChild("n10").text = i.des, s.getChild("n7").text =
                    i.cost, this._yuganList.push(s), s.onClick(this, this.onClickItem, [s])
            }
            this._btnClose.onClick(this, this.onTouch, [this._btnClose]), this._btnUnlock.onClick(this, this
                .onTouch, [this._btnUnlock]), this._btnVedio.onClick(this, this.onTouch, [this._btnVedio])
        }
        show(t) {
            super.show({
                    showBanner: !0
                }), this._selectYuganItem = null, this._selectLibaoItem = null, this.refreshYugan(), this
                .refreshLibao()
        }
        refreshYugan() {
            for (let t = 0; t < this._yuganList.length; t++) {
                let e = Pt.Instance.isYuganUnlock(t + 1),
                    i = this._yuganList[t].getController("c1");
                i.selectedIndex = e ? 2 : 0
            }
        }
        onClickItem(t) {
            Pt.Instance.isYuganUnlock(t.index + 1) || (this.refreshYugan(), t.getController("c1").selectedIndex = 1,
                this._selectYuganItem = t, this._selectLibaoItem && (this._selectLibaoItem.getController("c1")
                    .selectedIndex = 0), this._selectLibaoItem = null)
        }
        refreshLibao() {
            this._sortList = [];
            this.LIBAO_LIST;
            this._sortList = [{
                skinId: -1,
                cost: 0
            }], this._libaoList.numItems = this._sortList.length
        }
        libaoListData(t, e) {
            let i = this._sortList[t];
            e.index = t, e.getChild("n7").text = i.cost, -1 != i.skinId ? Pt.Instance.isSkinUnlock(i.skinId) ? e
                .getController("c1").selectedIndex = 3 : e.getController("c1").selectedIndex = 0 : e.getController(
                    "c1").selectedIndex = 2
        }
        onClickLibaoItem(t) {
            if (t.index < this._sortList.length - 1 && !Pt.Instance.isSkinUnlock(this._sortList[t.index].skinId)) {
                for (var e = 0; e < this._libaoList.numItems - 1; e++) {
                    let t = this._libaoList.getChildAt(e),
                        i = this._sortList[e];
                    Pt.Instance.isSkinUnlock(i.skinId) ? t.getController("c1").selectedIndex = 3 : t.getController(
                        "c1").selectedIndex = 0
                }
                t.getController("c1").selectedIndex = 1, this._selectLibaoItem = t, this._selectYuganItem && (this
                    ._selectYuganItem.getController("c1").selectedIndex = 0), this._selectYuganItem = null
            }
        }
        sendBuy() {
            if (!this._selectYuganItem && !this._selectLibaoItem) return void _.show("Please pick a Rod");
            if (this._selectYuganItem) return Pt.Instance.starCoin < parseInt(this._selectYuganItem.getChild("n7")
                .text) ? void _.show("Not enough Diamon") : (Pt.Instance.changeStarCoin(-this._selectYuganItem.getChild(
                    "n7").text), Pt.Instance.setYuganUnlock(this._selectYuganItem.index + 1), Pt.Instance
                .useYuganIndex = this._selectYuganItem.index + 1, this.refreshYugan(), void(this
                    ._selectYuganItem = null));
            let t = this._sortList[this._selectLibaoItem.index].cost,
                e = this._sortList[this._selectLibaoItem.index].skinId;
            Pt.Instance.starCoin < parseInt(t) ? _.show("Not enough Diamon") : (Pt.Instance.changeStarCoin(-t), Pt.Instance
                .setSkinUnlock(e), Gt.Instance.showUI(nt.SkinUnlock, {
                    skinId: e
                }), this.refreshLibao(), this._selectLibaoItem = null)
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose:
                    V.Instance.resetEvent(), this.hide();
                    break;
                case this._btnUnlock:
                    this.sendBuy();
                    break;
                case this._btnVedio:
                    window.adsMgr && window.adsMgr.showVideoAd({
                        success: () => {
                            Pt.Instance.changeStarCoin(O.VIDEO_ADD_STAR_COIN)
                        },
                        fail: () => {}
                    })
            }
        }
        hide() {
            super.hide()
        }
    }
    class xt extends h {
        constructor() {
            super(), this._JTValue = 0, this._shouganValue = 0
        }
        initUI() {
            super.initUI(), this._control = this.contentPane.getController("c1"), this._btnStart = this.contentPane
                .getChild("n2"), this._btnPaogan = this.contentPane.getChild("n1"), this._startControl = this
                ._btnPaogan.getChild("n1").getController("c1"), this._floatTxt = this.contentPane.getChild("n8")
                .getChild("n3"), this._JTCom = this.contentPane.getChild("n3"), this._JTControl = this._JTCom
                .getController("c1"), this._JTBar_Hong = this._JTCom.getChild("n1"), this._JTBar_Cheng = this._JTCom
                .getChild("n2"), this._JTBar_Lv = this._JTCom.getChild("n3"), this._shouganCom = this.contentPane
                .getChild("n4"), this._shouganControl = this._shouganCom.getController("c1"), this
                ._shouganBar_Hong = this._shouganCom.getChild("n2"), this._shouganBar_Cheng = this._shouganCom
                .getChild("n3"), this._shouganBar_Lv = this._shouganCom.getChild("n1"), this._btnStart.onClick(this,
                    this.onTouch, [this._btnStart]), this._btnPaogan.onClick(this, this.onTouch, [this._btnPaogan]),
                Laya.stage.on(a.EVENT_START_SHOUGAN, this, this.fishingShougan), this.contentPane.getChild("n7")
                .height = Laya.stage.height, this.contentPane.getChild("n7").width = Laya.stage.width
        }
        show(t) {
            super.show({
                    showBanner: !0
                }), this._control.selectedIndex = 0, this._JTValue = 0, this._shouganValue = 60, this._JTRotate = !
                1, this._rotateLeft = !0, this._JTEnergy = !1, this._energyUp = !0, this._isShougan = !1, this
                ._shouganUp = !1, this._floatTxt.text = O.Instance.surFloatCount + "/" + O.FLOAT_COUNT
        }
        updateLoop() {
            if (this._JTRotate) {
                let t = 20;
                t = 1 == O.Instance.fishingMapIndex ? 16 : 25;
                let e = .5;
                this._JTCom.rotation = this._JTCom.rotation + (this._rotateLeft ? -e : e), (this._JTCom.rotation <=
                    -t || this._JTCom.rotation >= t) && (this._rotateLeft = !this._rotateLeft)
            }
            if (this._JTEnergy) {
                let t = 1;
                this._JTValue = this._JTValue + (this._energyUp ? t : -t), this.setJTBarValue(this._JTValue), (this
                    ._JTValue >= 100 || this._JTValue <= 0) && (this._energyUp = !this._energyUp)
            }
            if (this._isShougan) {
                let t = 1;
                this._shouganValue = this._shouganValue + (this._shouganUp ? t : -t), this.setShouganValue(this
                    ._shouganValue), (this._shouganValue >= 100 || this._shouganValue <= 0) && (this.hide(), _
                    .show("Oh, the Fish ran away"), Laya.stage.event(a.EVENT_FISHING_FAIL))
            }
        }
        fishingShougan() {
            this._control.selectedIndex = 2, this._shouganCom.visible = !0, this._isShougan = !0, this
                ._shouganUp = !1, this.setShouganValue(60), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this
                    .onMouseDown)
        }
        onMouseDown(t) {
            Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp), Laya.stage.off(Laya.Event.MOUSE_UP, this,
                this.onMouseUp), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.stage.on(Laya
                .Event.MOUSE_OUT, this, this.onMouseUp), this._shouganUp = !0, Laya.stage.event(a
                .EVENT_FISHING_SHOUGAN, {
                    isShougan: !0
                })
        }
        onMouseUp(t) {
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.stage.off(Laya.Event.MOUSE_OUT, this,
                this.onMouseUp), this._shouganUp = !1, Laya.stage.event(a.EVENT_FISHING_SHOUGAN, {
                isShougan: !1
            })
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnStart:
                    this._control.selectedIndex = 1, this._startControl.selectedIndex = 1, this._btnPaogan
                        .visible = !0, this.setJTBarValue(0), this._JTCom.rotation = 0, this._JTCom.visible = !0,
                        this._JTRotate = !0, Laya.timer.frameLoop(1, this, this.updateLoop);
                    break;
                case this._btnPaogan:
                    1 == this._startControl.selectedIndex ? (this._JTRotate = !1, this._JTEnergy = !0, this
                        ._startControl.selectedIndex = 0) : (this._JTEnergy = !1, this._btnPaogan.visible = !1,
                        this._JTCom.visible = !1, Laya.stage.event(a.EVENT_START_FISHING, {
                            angle: this._JTCom.rotation,
                            energy: this._JTValue
                        }))
            }
        }
        setJTBarValue(t) {
            this._JTValue = t, this._JTBar_Hong.value = t, this._JTBar_Cheng.value = t, this._JTBar_Lv.value = t,
                this._JTValue > 0 && this._JTValue < 40 && 2 != this._JTControl.selectedIndex ? this._JTControl
                .selectedIndex = 2 : this._JTValue >= 40 && this._JTValue < 75 && 1 != this._JTControl
                .selectedIndex ? this._JTControl.selectedIndex = 1 : this._JTValue >= 75 && 0 != this._JTControl
                .selectedIndex && (this._JTControl.selectedIndex = 0)
        }
        setShouganValue(t) {
            this._shouganValue = t, this._shouganBar_Cheng.value = t, this._shouganBar_Hong.value = t, this
                ._shouganBar_Lv.value = t, this._shouganValue > 0 && this._shouganValue < 40 && 2 != this
                ._shouganControl.selectedIndex ? this._shouganControl.selectedIndex = 2 : this._shouganValue >=
                40 && this._shouganValue < 75 && 1 != this._shouganControl.selectedIndex ? this._shouganControl
                .selectedIndex = 1 : this._shouganValue >= 75 && 0 != this._shouganControl.selectedIndex && (this
                    ._shouganControl.selectedIndex = 0)
        }
        hide() {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.off(Laya.Event.MOUSE_UP, this,
                    this.onMouseUp), Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp), Laya.timer
                .clearAll(this), super.hide()
        }
    }
    class bt extends h {
        constructor() {
            super()
        }
        initUI() {
            super.initUI(), this._btnClose = this.contentPane.getChild("n1"), this._rocker = this.contentPane
                .getChild("n4"), this._btnClose.onClick(this, this.onTouch, [this._btnClose]), this.contentPane
                .getChild("n5").height = Laya.stage.height, this.contentPane.getChild("n5").width = Laya.stage.width
        }
        show(t) {
            super.show({
                showBanner: !1
            }), this._rocker.show(!1)
        }
        get rocker() {
            return this._rocker
        }
        onTouch(t) {
            switch (n.Instance.playButton(), t) {
                case this._btnClose:
                    V.Instance.removeScene3d(), D.Instance.resetGame(Pt.Instance.level), Gt.Instance.showUI(nt
                        .Hall), this.hide()
            }
        }
        hide() {
            this._rocker && this._rocker.show(!1), super.hide()
        }
    }
    class Dt extends fgui.GComponent {
        constructor() {
            super(...arguments), this._initHeartX = 0, this._initHeartY = 0, this._downPos = new Laya.Vector3
        }
        constructFromXML(t) {
            super.constructFromXML(t), this._rockerBG = this.getChild("n0"), this._rockerHeart = this.getChild(
                    "n1"), this._radius = this._rockerBG.width / 2, this._initHeartX = this._rockerHeart.x, this
                ._initHeartY = this._rockerHeart.y
        }
        show(t, e, i) {
            this.visible = t, this.visible && (this._downPos.setValue(e, i, 0), this.pos(e, i), this.heartPos(
                this._initHeartX, this._initHeartY))
        }
        touchMove(t, e) {
            let i = new Laya.Vector3(t, e, 0),
                s = Laya.Vector3.distance(i, this._downPos);
            if (s < this._radius) {
                let i = t - this._downPos.x,
                    s = e - this._downPos.y,
                    n = this._initHeartX + i,
                    a = this._initHeartY + s;
                this.heartPos(n, a)
            } else {
                let t = new Laya.Vector3;
                Laya.Vector3.subtract(i, this._downPos, t), Laya.Vector3.normalize(t, t);
                let e = new Laya.Vector3;
                Laya.Vector3.scale(t, s - this._radius, e), Laya.Vector3.add(this._downPos, e, this._downPos),
                    this.pos(this._downPos.x, this._downPos.y), Laya.Vector3.scale(t, this._radius, t);
                let n = this._initHeartX + t.x,
                    a = this._initHeartY + t.y;
                this.heartPos(n, a)
            }
        }
        heartPos(t, e) {
            this._rockerHeart.x = t, this._rockerHeart.y = e
        }
        pos(t, e) {}
    }
    Dt.URL = "ui://76nl9vqqqd0e8b";
    class Gt {
        constructor() {
            this._layaIndex = 0, this._uiMap = {}
        }
        static get Instance() {
            return null == Gt._Ins && (Gt._Ins = new Gt), Gt._Ins
        }
        init() {
            fgui.UIPackage.addPackage(e.FGUI_URL_PACKAGE_MAIN1), fgui.UIObjectFactory.setPackageItemExtension(X.URL,
                    X), fgui.UIObjectFactory.setPackageItemExtension(q.URL, q), fgui.UIObjectFactory
                .setPackageItemExtension(j.URL, j), fgui.UIObjectFactory.setPackageItemExtension(Q.URL, Q), fgui
                .UIObjectFactory.setPackageItemExtension(tt.URL, tt), fgui.UIObjectFactory.setPackageItemExtension(
                    ut.URL, ut), fgui.UIObjectFactory.setPackageItemExtension(St.URL, St), fgui.UIObjectFactory
                .setPackageItemExtension(At.URL, At);
            let t = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "zhuye").asCom,
                i = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "youxiye").asCom,
                s = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "caidanqiang").asCom,
                n = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "zhuanpan").asCom,
                a = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "pifu").asCom,
                o = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "fenghuang").asCom,
                h = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "xuanguan").asCom,
                r = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "qiandao").asCom,
                l = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "shenmipifu").asCom,
                c = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "kongtoutanchuang").asCom,
                _ = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "shengli").asCom,
                d = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "shibaijiesuan").asCom,
                g = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "GoldAniUI").asCom,
                u = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "pifutanchuang").asCom,
                m = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "jiesuocaidan").asCom,
                S = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "tanchuang").asCom,
                y = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "shezhi").asCom,
                L = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "ReplayUI").asCom,
                p = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "huaban").asCom,
                f = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "huaban_tanchuang").asCom,
                C = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME1, "SceneLoading").asCom;
            this.createUI(t, H, nt.Hall), this.createUI(i, _t, nt.Game), this.createUI(s, gt, nt.CaiDan), this
                .createUI(n, $, nt.Lottery), this.createUI(_, lt, nt.ResultWin), this.createUI(d, ct, nt
                .ResultFail), this.createUI(a, J, nt.Skin), this.createUI(o, yt, nt.Fenghuang), this.createUI(h, Lt,
                    nt.SelectMap), this.createUI(r, Z, nt.Sign), this.createUI(l, it, nt.VidioUnlockSkin), this
                .createUI(c, I, nt.Kongtoutanchuang), this.createUI(g, W, nt.GoldAni), this.createUI(m, It, nt
                    .CaiDanUnlock), this.createUI(S, mt, nt.CaiDanTanchuang), this.createUI(u, et, nt.SkinUnlock),
                this.createUI(y, Y, nt.Stting), this.createUI(L, dt, nt.Replay), this.createUI(p, Ct, nt.Huaban),
                this.createUI(f, ft, nt.Huaban_tanchuang), this.createUI(C, pt, nt.SceneLoading), this.showUI(nt
                    .Hall)
        }
        loadPackageZIP(t) {
            this._loadFunc = t, c.Instance.checkCache(this.loadPackage2.bind(this), "fgui.zip")
        }
        loadPackage2() {
            this._package2loaded || Laya.loader.load([{
                url: Yt.fguiURL(e.FGUI_URL_MAIN_TXT2),
                type: Laya.Loader.BUFFER
            }, {
                url: Yt.fguiURL(e.FGUI_PACKAGE2_ATLAS0),
                type: Laya.Loader.IMAGE
            }], Laya.Handler.create(this, this.initPackage2))
        }
        initPackage2() {
            this._package2loaded = !0, this._loadFunc && this._loadFunc(), this._loadFunc = null, fgui.UIPackage
                .addPackage(Yt.fguiURL(e.FGUI_URL_PACKAGE_MAIN2)), fgui.UIObjectFactory.setPackageItemExtension(Dt
                    .URL, Dt), fgui.UIObjectFactory.setPackageItemExtension(Tt.URL, Tt), fgui.UIObjectFactory
                .setPackageItemExtension(kt.URL, kt), fgui.UIObjectFactory.setPackageItemExtension(Nt.URL, Nt);
            let t = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME2, "FishHall").asCom,
                i = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME2, "diaoyuzhanshi").asCom,
                s = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME2, "dituxuanze").asCom,
                n = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME2, "yuleitujian").asCom,
                a = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME2, "jiayuanshangdian").asCom,
                o = fgui.UIPackage.createObject(e.FGUI_URL_PACKAGE_MAIN_NAME2, "kaishidiaoyu").asCom,
                h = this._layaIndex - 8;
            this.createUI(t, bt, nt.FishingHall, h++), this.createUI(s, Et, nt.Dituxuanze, h++), this.createUI(n,
                Ut, nt.Yuleitujian, h++), this.createUI(o, xt, nt.Fishing, h++), this.createUI(i, wt, nt
                .Diaoyuzhanshi, h++), this.createUI(a, vt, nt.Jiayuanshangdian, h++)
        }
        showUI(t, e) {
            let i = this._uiMap[t];
            i ? (this.getUI(nt.FishingHall) && this.getUI(nt.FishingHall).rocker && this.getUI(nt.FishingHall)
                .rocker.show(!1), i.show(e)) : console.error("Not Found Open ui:", t)
        }
        getUI(t) {
            let e = this._uiMap[t];
            return e || console.error("Not Found ui:", t), e
        }
        hideUI(t) {
            let e = this.getUI(t);
            e && e.hide()
        }
        createUI(t, e, i, s = -1) {
            let n = -1 == s ? this._layaIndex : s;
            fgui.GRoot.inst.addChildAt(t, n);
            let a = new e;
            return a.layaIndex = this._layaIndex, a.contentPane = t, a.contentPane.visible = !1, a.initUI(), -1 ==
                s && this._layaIndex++, this._uiMap[i] = a, a
        }
        get package2loaded() {
            return this._package2loaded
        }
    }! function(t) {
        t[t.Hall = 1] = "Hall", t[t.Game = 2] = "Game", t[t.ResultWin = 3] = "ResultWin", t[t.Formation = 4] =
            "Formation", t[t.Stting = 5] = "Stting", t[t.SkinUnlock = 6] = "SkinUnlock", t[t.UnlockLimitedSkin = 7] =
            "UnlockLimitedSkin", t[t.VidioUnlockSkin = 8] = "VidioUnlockSkin", t[t.Skin = 9] = "Skin", t[t.Lottery =
            10] = "Lottery", t[t.Sign = 11] = "Sign", t[t.Treasure = 12] = "Treasure", t[t.Share = 13] = "Share", t[t
                .GoldAni = 14] = "GoldAni", t[t.ResultFail = 15] = "ResultFail", t[t.Replay = 16] = "Replay", t[t
                .CaiDan = 17] = "CaiDan", t[t.CaiDanUnlock = 18] = "CaiDanUnlock", t[t.CaiDanTanchuang = 19] =
            "CaiDanTanchuang", t[t.Kongtoutanchuang = 20] = "Kongtoutanchuang", t[t.GongGao = 21] = "GongGao", t[t
                .ZhaoHuiYouXi = 22] = "ZhaoHuiYouXi", t[t.Shoucangyouxi = 23] = "Shoucangyouxi", t[t.SelectMap = 24] =
            "SelectMap", t[t.Fenghuang = 25] = "Fenghuang", t[t.Huaban = 26] = "Huaban", t[t.Huaban_tanchuang = 27] =
            "Huaban_tanchuang", t[t.Shipindianzan = 28] = "Shipindianzan", t[t.Diaoyuzhanshi = 29] = "Diaoyuzhanshi", t[
                t.Dituxuanze = 30] = "Dituxuanze", t[t.Yuleitujian = 31] = "Yuleitujian", t[t.Jiayuanshangdian = 32] =
            "Jiayuanshangdian", t[t.Fishing = 33] = "Fishing", t[t.FishingHall = 34] = "FishingHall", t[t.SceneLoading =
                999] = "SceneLoading"
    }(nt || (nt = {}));
    class Rt extends Laya.Script3D {
        constructor() {
            super(...arguments), this._forward = new Laya.Vector3, this._dragging = !1, this._exploded = !1,
                this._victory = !1, this._downTime = 0, this._downCnt = 0, this._clickCostTime = 0, this
                ._downPos = new Laya.Vector3, this._allowHitBoss = !1, this._oldScale = 1, this
                ._isScaleChange = !1
        }
        onStart() {
            this._transform = this.owner.transform, this._cameraTransform = this.owner.parent.getChildByName(
                    "Main Camera").transform, this._startCameraPos = this._cameraTransform.position.clone(),
                this._startCameraRot = this._cameraTransform.rotationEuler.clone(), this._oldScale = this
                .bulletScale, Rt.SPEED = Pt.Instance.useSkinId == e.WUCAI_FENGHUANG ? 5 * Rt.BASE_SPEED : Rt
                .BASE_SPEED, Rt.FAST_SPEED = 2 * Rt.SPEED, this._speed = Rt.SPEED, this.updateForward(), Laya
                .stage.on(Laya.Event.MOUSE_DOWN, this, this.onStageMouseDown), Laya.stage.on(Laya.Event
                    .MOUSE_MOVE, this, this.onStageMouseMove), Laya.stage.on(Laya.Event.MOUSE_UP, this, this
                    .onStageMouseUp), Laya.stage.on(a.GO_ON_GAME, this, this.goonGame), Laya.stage.on(a
                    .PAUSE_GAME, this, this.pauseGame), Laya.stage.on(a.BULLET_JIASHU, this, this.bulletJS),
                Laya.stage.on(a.USE_SKILL, this, this.useSkill), Laya.stage.on(a.DESTROY_BULLET, this, this
                    .destroyBullet), Pt.Instance.useSkinId == e.TASK_GUITAR && (this.owner.getChildByName(
                    "kill").active = !1, n.Instance.playGameBgm(!0))
        }
        onUpdate() {
            if (!this._exploded) {
                this._transform.translate(this._forward, !1);
                var t = this._transform.position;
                E.Instance.updatePos(t.clone()), o.Instance.deads.length + 1 == o.Instance.enemyInfo.total && o
                    .Instance.maxHight < t.y && (o.Instance.maxHight = t.y);
                var i = this._cameraTransform.position;
                let l = Rt.CAMERA_DISTANCE / this._speed;
                var s = new Laya.Vector3(t.x - this._forward.x * l, t.y - this._forward.y * l + 1, t.z - this
                    ._forward.z * l);
                Laya.Vector3.lerp(i, s, .1, i), this._cameraTransform.position = i, this._currJSEff && (this
                    ._currJSEff.transform.position = this._cameraTransform.position, this._currJSEff
                    .transform.rotation = this._cameraTransform.rotation);
                var h = new Laya.Vector3(0, 1, 0);
                if (this._transform.getUp(h), this._cameraTransform.lookAt(t, h), o.Instance.frames++ % Rt
                    .RECORD_FRAME_INTERVAL == 0) {
                    var r = this._transform.rotation;
                    if (o.Instance.bulletData.push(t.x, t.y, t.z, r.x, r.y, r.z, r.w), E.Instance.fhScript) {
                        let t = E.Instance.fhScript.pos,
                            e = E.Instance.fhScript.rotation;
                        o.Instance.fhData.push(t.x, t.y, t.z, e.x, e.y, e.z, e.w)
                    }
                }!this._isScaleChange && this.bulletScale > this._oldScale && (this.bulletScale -= 1 / 60 *
                    .133, this.bulletScale < this._oldScale && (this.bulletScale = this._oldScale));
                let c = C.detection(this._transform.position.clone());
                if (c) {
                    let t = !1,
                        i = !1;
                    if ("Enemies" == c.parent.name) {
                        if (o.Instance.deads.indexOf(c) >= 0) return;
                        let s = !1;
                        if (c.name.indexOf("boss") >= 0 && (s = !0), this.playHitRange(c.transform.position
                                .clone(), s), c.name.indexOf("boss_") >= 0 && Laya.stage.event(a.SECKILL_BOSS, {
                                total: c.parent.numChildren,
                                die: o.Instance.deads.length
                            }), Pt.Instance.useSkinId == e.TASK_LEISHENGCHUI) {
                            let t = this.owner.getComponent(Laya.Animator);
                            t.speed = 2, t.play("lenshenchui_ani_attack", 0, 0), c.getChildByName("Bullet_NPC")
                                .skinnedMeshRenderer.material.albedoColor = new Laya.Vector4(0, 0, 0, 1), Laya
                                .timer.once(350, this, () => {
                                    t.play("lenshenchui_ani", 0, 0)
                                })
                        }
                        o.Instance.deads.push(c), Laya.stage.event(a.EVENT_UPDATE_ENEMY_COUNT, {
                            total: c.parent.numChildren,
                            die: o.Instance.deads.length
                        }), o.Instance.enemyData.push(Math.floor(o.Instance.frames / Rt
                            .RECORD_FRAME_INTERVAL), c.parent.getChildIndex(c)), Mt.Instance.bulletHitHead(
                            t), Mt.Instance.bulletHitEnemyOrCivilian(i, !0);
                        let h = 1e3;
                        if (Pt.Instance.useSkinId == e.TASK_GUITAR && (h = 2500, this.owner.getChildByName(
                                "kill").active = !0, Laya.timer.once(1e3, this, () => {
                                this.owner.getChildByName("kill").active = !1
                            })), o.Instance.deads.length >= c.parent.numChildren) this.pauseGame(), Laya.timer
                            .once(h, this, () => {
                                this.victory()
                            });
                        else if (o.Instance.isBoss && o.Instance.bulletCount <= 0) return void this.gameover(!
                        1);
                        let r = c.getComponent(Laya.Animator);
                        r.speed = .5;
                        let l = null,
                            _ = c.getChildByName("feiskin2");
                        _ && ((l = _.getComponent(Laya.Animator)).speed = .5);
                        let d = 3e3;
                        Pt.Instance.useSkinId == e.TASK_BINGFAZHANG && (d = 1e3), Laya.timer.once(d, this,
                    () => {
                            c.getChildByName("YingZi") && (c.getChildByName("YingZi").active = !1), Pt
                                .Instance.useSkinId == e.TASK_BINGFAZHANG && (c.active = !1)
                        });
                        let I = c.getComponent(g);
                        I && I.stopMove();
                        let m = c.getComponent(u);
                        if (m && m.stopMove(), Pt.Instance.useSkinId == e.TASK_BINGFAZHANG) return r.play(
                            "idle", 0, 0), o.Instance.actionData.push("idle"), void(l && l.play("idle",
                            0, 0));
                        if (Pt.Instance.useSkinId == e.TASK_GUITAR) return r.play(U.die_guiter, 0, 0), r.speed =
                            1, l && (l.speed = 1, l.play(U.die_guiter, 0, 0)), void o.Instance.actionData
                            .push(U.die_guiter);
                        if (Pt.Instance.useSkinId == e.TASK_SHIT) return r.play(U.die_shit, 0, 0), r.speed = 1,
                            l && (l.speed = 1, l.play(U.die_shit, 0, 0)), void o.Instance.actionData.push(U
                                .die_shit);
                        let S = U.die_back,
                            y = new Laya.Vector3;
                        this._transform.getForward(y), Laya.Vector3.normalize(y, y);
                        let L = new Laya.Vector3;
                        c.transform.getForward(L), Laya.Vector3.normalize(L, L);
                        let p = Laya.Vector3.dot(new Laya.Vector3(y.x, 0, y.z), new Laya.Vector3(L.x, 0, L.z)),
                            f = Math.acos(p),
                            C = Kt.radianChangeAngle(f),
                            A = new Laya.Vector3;
                        Laya.Vector3.cross(new Laya.Vector3(y.x, 0, y.z), new Laya.Vector3(L.x, 0, L.z), A), C <
                            35 ? S = U.die_back : C >= 35 && C <= 145 ? S = p > 0 ? A.y < 0 ? U.die_left : U
                            .die_right : A.y > 0 ? U.die_right : U.die_left : C > 145 && (S = U.die_front), Laya
                            .timer.once(550, this, () => {
                                r.play(S, 0, 0), l && l.play(S, 0, 0), n.Instance.playeDie(), n.Instance
                                    .vibrate()
                            }), o.Instance.actionData.push(S)
                    }
                }
            }
        }
        onDestroy() {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onStageMouseDown), Laya.stage.off(Laya.Event
                    .MOUSE_MOVE, this, this.onStageMouseMove), Laya.stage.off(Laya.Event.MOUSE_UP, this, this
                    .onStageMouseUp), Laya.stage.off(a.GO_ON_GAME, this, this.goonGame), Laya.stage.off(a
                    .PAUSE_GAME, this, this.pauseGame), Laya.stage.off(a.BULLET_JIASHU, this, this.bulletJS),
                Laya.stage.off(a.USE_SKILL, this, this.useSkill), Laya.stage.off(a.DESTROY_BULLET, this, this
                    .destroyBullet)
        }
        onTriggerExit(t) {
            var e = t.owner;
            "fogbox" != e.name ? "scalebox" != e.name || (this._isScaleChange = !1) : E.Instance.openFog(!1)
        }
        onTriggerStay(t) {
            if ("scalebox" == t.owner.name && Pt.Instance.useSkinId == e.TASK_YOULING) return this.bulletScale <
                5 * this._oldScale && (this.bulletScale += .5 / 60), void(this.bulletScale >= 5 * this
                    ._oldScale && (this.bulletScale = 5 * this._oldScale, Mt.Instance
                    .bulletFengHuang_Feng()))
        }
        onTriggerEnter(t) {
            if (!this._exploded && !this._victory) {
                let S = !1,
                    y = !1;
                for (var i = t.owner;;) {
                    if (i.parent instanceof Laya.Scene3D) return void this.gameover(!1);
                    if ("fogbox" == i.name) return void E.Instance.openFog(!0);
                    if ("scalebox" == i.name) return void(Pt.Instance.useSkinId == e.TASK_YOULING && (this
                        ._isScaleChange = !0));
                    if (i.name.indexOf("feiskin2") >= 0) return void this.gameover(!1);
                    if ("yun_1" == i.name) return void(e.BLUE_BINGSHUANG_SKIN == Pt.Instance.useSkinId && (this
                        .playHit(), i.active = !1, E.Instance.yunMove()));
                    if ("boss_youling" == i.name) return void(e.BLUE_ZISE_HULUWA == Pt.Instance.useSkinId && (
                        this.playHit(), i.active = !1, Mt.Instance.bulletYouling()));
                    if ("box_dongfeng" == i.name) return void(e.BULLET_DAODAN_SKIN == Pt.Instance.useSkinId && (
                        this.playHit(), i.active = !1, Mt.Instance.bulletDongFengKuaiDi(1)));
                    if ("box_kuaidi" == i.name) return void(e.BULLET_DAODAN_SKIN == Pt.Instance.useSkinId && (
                        this.playHit(), i.active = !1, Mt.Instance.bulletDongFengKuaiDi(2)));
                    if ("door" == i.parent.name) return this.playHit(), void Mt.Instance.bulletFengHuang_AN();
                    if ("lenshenchui_stone" == i.name) return this.playHit(), e.TASK_FENGHUANG_LEI != Pt
                        .Instance.useSkinId ? void this.gameover(!1) : (i.active = !1, void Mt.Instance
                            .bulletLeishengchui());
                    if ("SUN" == i.name) {
                        if (this.playHit(), e.BLUE_BINGSHUANG_SKIN != Pt.Instance.useSkinId) return void this
                            .gameover(!1);
                        let t = E.Instance.yun2Pos && Laya.Vector3.distance(E.Instance.yun2Pos, i.transform
                            .position) || -1;
                        console.log("------dis:", t);
                        let s = !1;
                        if (s = t >= 0 && t <= 3 ? Mt.Instance.bulletFengHuang_Lei() : Mt.Instance
                            .bulletHitSun()) {
                            let t = i.parent.getChildIndex(i);
                            o.Instance.otherData.push(Math.floor(o.Instance.frames / Rt.RECORD_FRAME_INTERVAL),
                                at.SUN, t), i.active = !1
                        }
                        return
                    }
                    if ("Moon" == i.name) {
                        if (this.playHit(), e.SHARE_SKINID != Pt.Instance.useSkinId) return void this.gameover(!
                            1);
                        let t = i.parent.getChildIndex(i);
                        return o.Instance.otherData.push(Math.floor(o.Instance.frames / Rt
                            .RECORD_FRAME_INTERVAL), at.Moon, t), Mt.Instance.bulletFengHuang_Bing(), void(i
                            .active = !1)
                    }
                    if ("7x_girl" == i.parent.name) return this.playHit(), Mt.Instance.bulletBingxuefazhang(),
                        void this.gameover(!1);
                    if ("moon" == i.parent.name && "Moon_2" == i.parent.parent.name) return void this.gameover(!
                        1);
                    if ("moon" == i.name && "Moon_2" == i.parent.name) {
                        let t = i.getComponent(Laya.PhysicsCollider);
                        return t && (t.enabled = !1), void(i.parent.getChildByName("QX").active && (i.parent
                            .getChildByName("Fx_smoke").particleSystem.play(), i.parent.getChildByName(
                                "QX").active = !1))
                    }
                    if ("taoxin" == i.name) return void(Mt.Instance.bulletQiqiaozhen(1) && (this.playHit(), i
                        .active = !1));
                    if ("taoxin_kong" == i.name) return void(Mt.Instance.bulletQiqiaozhen(2) && (i.parent
                        .getChildByName("taoxin").active = !0, this.playHit(), i.active = !1));
                    if ("Dog" == i.parent.name) return Mt.Instance.bulletDanshengou() && (this.playHit(), i
                        .active = !1), void(Mt.Instance.bulletWangfengjita() && (this.playHit(), i
                        .active = !1));
                    if (i.name.indexOf("woniu") >= 0) {
                        if (e.BLUE_HULUWA_SKIN == Pt.Instance.useSkinId || e.TASK_SHOULIJIAN == Pt.Instance
                            .useSkinId) {
                            this.playHit();
                            let t = i.parent.getChildIndex(i);
                            o.Instance.otherData.push(Math.floor(o.Instance.frames / Rt.RECORD_FRAME_INTERVAL),
                                    at.Woniu, t), Mt.Instance.bulletHitWoniu(), Mt.Instance
                            .bulletRanShaoWoniu(), i.active = !1
                        }
                        return
                    }
                    if ("shanhu" == i.name) return void(e.TASK_FENGHUANG == Pt.Instance.useSkinId && (this
                        .playHit(), o.Instance.otherData.push(Math.floor(o.Instance.frames / Rt
                            .RECORD_FRAME_INTERVAL), at.Shanhu), Mt.Instance.bulletHitShanhu()));
                    if (i.name.indexOf("JLS") >= 0) return this.playHit(), i.active = !1, this.pauseGame(), Ht
                        .Ins.pauseRecord(), Gt.Instance.showUI(nt.Kongtoutanchuang), void o.Instance
                        .otherData.push(Math.floor(o.Instance.frames / Rt.RECORD_FRAME_INTERVAL), at.JLS);
                    if ("Bip001 Head" == i.parent.name && (S = !0), "Bip001 Spine1_collider" == i.name && (y = !
                            0), "Player_new" == i.name && (this.playHit(), Mt.Instance.bulletHitPlayer()), i
                        .name.indexOf("WaspNest") >= 0) return this.playHit(), void(e.TASK_FENGHUANG == Pt
                        .Instance.useSkinId ? (Mt.Instance.bulletRanShaoFengChao(), i.active = !1, o
                            .Instance.otherData.push(Math.floor(o.Instance.frames / Rt
                                .RECORD_FRAME_INTERVAL), at.RanShaoFengChao)) : (Mt.Instance
                            .bulletHitFengChao(), o.Instance.otherData.push(Math.floor(o.Instance
                                .frames / Rt.RECORD_FRAME_INTERVAL), at.WaspNest)));
                    if ("yugang" == i.name) {
                        this.playHit(), i.getChildAt(0).active = !1, i.getChildAt(1).active = !1, i
                            .getChildByName("broken_FX").particleSystem.play(), Mt.Instance.bulletHitYuGang();
                        let t = i.parent.getChildIndex(i);
                        return void o.Instance.otherData.push(Math.floor(o.Instance.frames / Rt
                            .RECORD_FRAME_INTERVAL), at.yugang, t)
                    }
                    if ("window" == i.name) {
                        this.playHit(), i.active = !1, i.parent.getChildByName("broken_FX").particleSystem
                        .play();
                        let t = i.parent.getChildIndex(i);
                        return void o.Instance.otherData.push(Math.floor(o.Instance.frames / Rt
                            .RECORD_FRAME_INTERVAL), at.GLASS, t)
                    }
                    if (i.parent.name.indexOf("Bomb") >= 0) {
                        this.playHit(), Laya.timer.once(400, this, () => {
                                n.Instance.playeBomb()
                            }), o.Instance.bombData.push(Math.floor(o.Instance.frames / Rt
                                .RECORD_FRAME_INTERVAL), this.getBombIndex(i.parent)), i.active = !1, i.parent
                            .numChildren > 1 && (i.parent.getChildAt(1).active = !0);
                        var s = i.parent.transform.position,
                            h = !1,
                            r = this.owner.parent.getChildByName("Civilians");
                        if (r && r.numChildren > 0)
                            for (var l = 0; l < r.numChildren; l++) {
                                var c = r.getChildAt(l);
                                if (Laya.Vector3.distance(c.transform.position, s) < Rt.BOMB_DISTANCE) {
                                    var _ = c.getComponent(Laya.Animator);
                                    let t = U.die_back;
                                    _.play(t, 0, 0), n.Instance.playeDie(), n.Instance.vibrate(), h = !0, o
                                        .Instance.actionData.push(t)
                                }
                            }
                        var d = this.owner.parent.getChildByName("Enemies");
                        for (l = 0; l < d.numChildren; l++) {
                            var I = d.getChildAt(l);
                            if (-1 == o.Instance.deads.indexOf(I) && Laya.Vector3.distance(I.transform.position,
                                    s) < Rt.BOMB_DISTANCE) {
                                (_ = I.getComponent(Laya.Animator)).speed = .5;
                                let t = U.die_back;
                                _.play(t, 0, 0);
                                let e = null,
                                    i = I.getChildByName("feiskin2");
                                i && ((e = i.getComponent(Laya.Animator)).speed = .5, e.play(t, 0, 0)), Laya
                                    .timer.once(3e3, this, () => {
                                        I.getChildByName("YingZi") && (I.getChildByName("YingZi").active = !
                                            1)
                                    }), o.Instance.actionData.push(t), o.Instance.deads.push(I), n.Instance
                                    .playeDie(), n.Instance.vibrate();
                                let s = I.getComponent(g);
                                s && s.stopMove();
                                let r = I.getComponent(u);
                                r && r.stopMove(), o.Instance.enemyData.push(Math.floor(o.Instance.frames / Rt
                                        .RECORD_FRAME_INTERVAL), l), !h && o.Instance.deads.length >= d
                                    .numChildren && this.victory(), Laya.stage.event(a
                                    .EVENT_UPDATE_ENEMY_COUNT, {
                                        total: d.numChildren,
                                        die: o.Instance.deads.length
                                    })
                            }
                        }
                        return void(h && this.gameover(!0))
                    }
                    if ("Civilians" == i.parent.name) {
                        Mt.Instance.bulletHitEnemyOrCivilian(y, !1), this.playHit(), this.gameover(!0);
                        break
                    }
                    if ("Enemies" == i.parent.name) {
                        if (o.Instance.deads.indexOf(i) >= 0) return;
                        if (i.name.startsWith("boss_")) {
                            if ("HIT_point" != t.owner.name) return void(this._allowHitBoss || (this.playHit(),
                                this.gameover(!1))); {
                                var m = t.owner.parent;
                                let e = m.getChildIndex(t.owner);
                                o.Instance.otherData.push(Math.floor(o.Instance.frames / Rt
                                    .RECORD_FRAME_INTERVAL), at.BOSS_HIT, e), Laya.stage.event(a
                                    .EVENT_UPDATE_ENEMY_COUNT, {
                                        bossHurt: !0
                                    }), this.playHit(), t.owner.active = !1;
                                let i = 0;
                                for (let t = 0; t < m.numChildren; t++) {
                                    let e = m.getChildAt(t);
                                    e.active && e.name.indexOf("HIT_point") >= 0 && i++
                                }
                                if (i > 0 && o.Instance.bulletCount > 0) return Laya.timer.once(500, this,
                            () => {
                                    Laya.stage.event(a.ADD_NEW_BULLET), this.destroyBullet()
                                }), this._exploded = !0, void(this.owner && (this.owner.active = !1))
                            }
                        }
                        if (this.playHit(), o.Instance.deads.push(i), Laya.stage.event(a
                                .EVENT_UPDATE_ENEMY_COUNT, {
                                    total: i.parent.numChildren,
                                    die: o.Instance.deads.length
                                }), o.Instance.enemyData.push(Math.floor(o.Instance.frames / Rt
                                .RECORD_FRAME_INTERVAL), i.parent.getChildIndex(i)), Mt.Instance.bulletHitHead(
                                S), Mt.Instance.bulletHitEnemyOrCivilian(y, !0), o.Instance.deads.length >= i
                            .parent.numChildren) this.victory();
                        else if (o.Instance.isBoss && o.Instance.bulletCount <= 0) return void this.gameover(!
                        1);
                        break
                    }
                    i = i.parent
                }(_ = i.getComponent(Laya.Animator)).speed = .5;
                let L = null,
                    p = i.getChildByName("feiskin2");
                p && ((L = p.getComponent(Laya.Animator)).speed = .5), Laya.timer.once(3e3, this, () => {
                    i.getChildByName("YingZi") && (i.getChildByName("YingZi").active = !1)
                });
                let f = i.getComponent(g);
                f && f.stopMove();
                let C = i.getComponent(u);
                C && C.stopMove();
                let A = new Laya.Vector3;
                this._transform.getForward(A), Laya.Vector3.normalize(A, A);
                let w = new Laya.Vector3;
                i.transform.getForward(w), Laya.Vector3.normalize(w, w);
                let T = Laya.Vector3.dot(new Laya.Vector3(A.x, 0, A.z), new Laya.Vector3(w.x, 0, w.z)),
                    k = Math.acos(T),
                    N = Kt.radianChangeAngle(k),
                    v = new Laya.Vector3;
                Laya.Vector3.cross(new Laya.Vector3(A.x, 0, A.z), new Laya.Vector3(w.x, 0, w.z), v);
                let x = U.die_back;
                Pt.Instance.useSkinId == e.TASK_SHIT ? x = U.die_shit : N < 35 ? x = U.die_back : N >= 35 &&
                    N <= 145 ? x = T > 0 ? v.y < 0 ? U.die_left : U.die_right : v.y > 0 ? U.die_right : U
                    .die_left : N > 145 && (x = U.die_front), Laya.timer.once(550, this, () => {
                        _.play(x, 0, 0), L && L.play(x, 0, 0), n.Instance.playeDie(), n.Instance.vibrate()
                    }), o.Instance.actionData.push(x)
            }
        }
        playHit() {
            n.Instance.playHit();
            let t = Yt.Hit;
            Pt.Instance.useSkinId == e.TASK_SHIT && (t = Yt.getRangHitUrl());
            var i = Laya.Sprite3D.instantiate(Laya.Loader.getRes(t));
            i.transform.position = this._transform.position, this.owner.parent.addChild(i)
        }
        playHitRange(t, i) {
            let s = Yt.getRangHitUrl(),
                a = Laya.Loader.getRes(s);
            var o = Laya.Sprite3D.instantiate(a);
            Pt.Instance.useSkinId == e.TASK_GUITAR ? (t.y += 1.5, i && (t.y += 2.5, o.transform.scale = new Laya
                    .Vector3(3, 3, 3))) : Pt.Instance.useSkinId == e.TASK_BINGFAZHANG && i && (o.transform
                    .scale = new Laya.Vector3(2.5, 2.5, 2.5)), o.transform.position = t, this.owner.parent
                .addChild(o), Pt.Instance.useSkinId == e.TASK_BINGFAZHANG ? (n.Instance.playFreeze(), Laya.timer
                    .once(800, this, () => {
                        o.getChildByName("ice_ani").active = !1, o.getChildByName("ice_Fx").active = !1, o
                            .getChildByName("Boom").active = !0, n.Instance.playBombIce()
                    })) : Pt.Instance.useSkinId == e.TASK_LEISHENGCHUI ? n.Instance.playLightning() : Pt
                .Instance.useSkinId == e.TASK_GUITAR && (n.Instance.playPiano(), Laya.timer.once(3e3, this,
                () => {
                        o.active = !1
                    }))
        }
        playBulletExplode() {
            this.playHit(), this._exploded = !0, this.owner.active = !1
        }
        gameover(t) {
            t || this.playBulletExplode(), Pt.Instance.useSkinId == e.TASK_GUITAR && n.Instance.playGameBgm(), n
                .Instance.playWohuo(), this._exploded = !0, console.log(
                    "Game Over! Restart after 1 or 3 second(s)."), o.Instance.isStartFighting = !1, n.Instance
                .vibrate(), Laya.timer.once(t ? 1e3 : 500, this, () => {
                    Laya.stage.offAll(a.CAIDAN_UNLOCK_FINISH), Laya.stage.on(a.CAIDAN_UNLOCK_FINISH, this,
                    () => {
                        Gt.Instance.hideUI(nt.Game), Gt.Instance.showUI(nt.ResultFail, {
                            hitCivilian: t
                        }), Laya.stage.event(Laya.Event.END)
                    }), Mt.Instance.checkAwardSkin(), Laya.stage.event(a.GAME_OVER)
                }), Laya.stage.event(a.FINISH_NEW_HAND)
        }
        victory() {
            this._victory = !0, o.Instance.isStartFighting = !1, console.log(
                "You win! Replay after 2 seconds."), Laya.timer.once(500, this, () => {
                    this.destroy(), D.Instance.replayLoaded(D.Instance.enterLevel)
                }), Laya.stage.event(a.GAME_OVER), Laya.stage.event(a.FINISH_NEW_HAND), Pt.Instance.useSkinId ==
                e.TASK_GUITAR && n.Instance.playGameBgm()
        }
        getBombIndex(t) {
            for (var e = 0, i = 0; i < this.owner.parent.numChildren; i++) {
                var s = this.owner.parent.getChildAt(i);
                if ("Bomb" == s.name) {
                    if (t == s) return e;
                    e++
                }
            }
            return -1
        }
        updateForward() {
            this._transform.getForward(this._forward), Laya.Vector3.normalize(this._forward, this._forward),
                this._forward.x *= this._speed, this._forward.y *= this._speed, this._forward.z *= this._speed
        }
        onStageMouseDown() {
            this._dragging = !0, this._mouseX = Laya.MouseManager.instance.mouseX, this._mouseY = Laya
                .MouseManager.instance.mouseY, this._downTime = Kt.now, 0 == this._downCnt && (this
                    ._clickCostTime = 0), this._downCnt += 1, this._downPos.setValue(this._mouseX, this._mouseY,
                    0), Laya.timer.clear(this, this.clearDownount), Laya.timer.once(300, this, this
                    .clearDownount)
        }
        onStageMouseMove() {
            if (this._dragging) {
                var t = Laya.MouseManager.instance.mouseX,
                    e = Laya.MouseManager.instance.mouseY,
                    i = t - this._mouseX,
                    s = e - this._mouseY;
                this._mouseX = t, this._mouseY = e;
                var n = this._transform.localRotationEuler;
                n.x -= s * Rt.ROTATE_FACTOR, n.y -= i * Rt.ROTATE_FACTOR, this._transform.localRotationEuler =
                    n, this.updateForward(), Laya.timer.once(2e3, this, () => {
                        Laya.stage.event(a.FINISH_NEW_HAND)
                    }), this._downPos.setValue(this._mouseX, this._mouseY, 0), Laya.Vector3.distance(this
                        ._downPos, new Laya.Vector3(t, e, 0)) > .1 && (this._downCnt = 0)
            }
        }
        onStageMouseUp() {
            this._dragging = !1;
            let t = Kt.now - this._downTime;
            this._clickCostTime += t, this._downCnt >= 2 && (this._downCnt = 0, this._clickCostTime < 600 &&
                this.bulletJS())
        }
        clearDownount() {
            this._downCnt = 0;
            Kt.now, this._downTime
        }
        goonGame() {
            this._exploded = !1
        }
        pauseGame() {
            this._exploded = !0
        }
        useSkill() {
            let t = Laya.loader.getRes(Yt.qiulongURL());
            if (!t) return;
            n.Instance.vibrate();
            let i = Math.floor(o.Instance.frames / Rt.RECORD_FRAME_INTERVAL);
            o.Instance.otherData.push(i, at.useSkill), console.log("The Number Of Frames Of Currently Stored Skills: ", i), Rt.fam = i;
            let s = this.owner.parent.getChildByName("Enemies");
            if ("qiulong" == t.name)
                for (let e = 0; e < s.numChildren; e++) {
                    let i = s.getChildAt(e);
                    if (o.Instance.deads.indexOf(i) >= 0) continue;
                    let a = t.clone();
                    this.owner.parent.addChild(a), a.getComponent(Laya.Animator).speed = 1, i.name.indexOf(
                            "boss_") >= 0 ? a.transform.localScale = new Laya.Vector3(1, 1, 1) : a.transform
                        .localScale = new Laya.Vector3(.6, .8, .6), a.transform.position = i.transform.position,
                        Laya.timer.once(500, this, () => {
                            n.Instance.playSkill()
                        });
                    let h = i.getComponent(g);
                    h && h.stop();
                    let r = i.getComponent(u);
                    r && r.stop()
                } else if ("FX_Thunder_skill" == t.name || "FX_snow_skill" == t.name || "FX_Guitar_skill" == t
                    .name) {
                    let i = 800,
                        n = this.owner.parent.getChildByName("Player_new").transform.position.clone(); - 1 != D
                        .Instance.BGName.indexOf("haidi") ? (n.x += 8, t.transform.localRotationEuler = new Laya
                            .Vector3(0, -90, 0)) : n.z -= 8;
                    let h = t.clone(),
                        r = h.getChildByName("FX");
                    r && (r.active = !1), this.owner.parent.addChild(h), h.transform.position = n, this
                        .pauseGame(), Laya.stage.offAll(a.ADD_NEW_BULLET), Laya.stage.offAll(Laya.Event
                            .MOUSE_DOWN), this._cameraTransform.position = this._startCameraPos, this
                        ._cameraTransform.rotationEuler = this._startCameraRot, Pt.Instance.useSkinId == e
                        .TASK_LEISHENGCHUI && (h.getComponent(Laya.Animator).speed = .3);
                    let l = null;
                    if ("FX_snow_skill" == t.name) {
                        i = 2e3;
                        let t = Yt.GirlURL();
                        if (!Laya.loader.getRes(t)) return Laya.loader.create(t, Laya.Handler.create(this,
                    () => {
                            this.useSkill()
                        })), void(h.active = !1);
                        l = Laya.Sprite3D.instantiate(Laya.loader.getRes(t)), h.addChild(l), l.transform
                            .localPosition = new Laya.Vector3(0, 1, 0);
                        for (let t = 0; t < l.numChildren; t++) {
                            let e = l.getChildAt(t);
                            "Bip001" == e.name || "7x_girl_body" == e.name || "7x_girl_eyes_1" == e.name ||
                                "7x_girl_head_5" == e.name ? e.active = !0 : e.active = !1
                        }
                        l.getComponent(Laya.Animator).play("huiwu")
                    }
                    Pt.Instance.useSkinId == e.TASK_GUITAR && (i = 2e3), Laya.timer.once(i, this, () => {
                        r && (r.active = !1), l && (l.active = !1);
                        for (let t = 0; t < s.numChildren; t++) {
                            let n = s.getChildAt(t);
                            if (o.Instance.deads.indexOf(n) >= 0) continue;
                            let h = !1;
                            if (n.name.indexOf("boss") >= 0 && (h = !0), this.playHitRange(n.transform
                                    .position.clone(), h), Pt.Instance.useSkinId == e
                                .TASK_LEISHENGCHUI) {
                                n.getChildByName("Bullet_NPC").skinnedMeshRenderer.material
                                    .albedoColor = new Laya.Vector4(0, 0, 0, 1)
                            }
                            o.Instance.deads.push(n), Laya.stage.event(a.EVENT_UPDATE_ENEMY_COUNT, {
                                total: n.parent.numChildren,
                                die: o.Instance.deads.length
                            }), o.Instance.enemyData.push(Math.floor(o.Instance.frames / Rt
                                .RECORD_FRAME_INTERVAL), n.parent.getChildIndex(n));
                            let r = n.getComponent(Laya.Animator),
                                l = null,
                                c = n.getChildByName("feiskin2");
                            c && ((l = c.getComponent(Laya.Animator)).speed = .5);
                            let _ = 2e3;
                            Pt.Instance.useSkinId == e.TASK_BINGFAZHANG && (_ = 1e3), Laya.timer.once(_,
                                this, () => {
                                    n.getChildByName("YingZi") && (n.getChildByName("YingZi")
                                            .active = !1), Pt.Instance.useSkinId == e
                                        .TASK_BINGFAZHANG && (n.active = !1)
                                });
                            let d = n.getComponent(g);
                            d && d.stop();
                            let I = n.getComponent(u);
                            I && I.stop(), o.Instance.deads.length >= n.parent.numChildren && Laya.timer
                                .once(i, this, () => {
                                    this.victory()
                                }), Pt.Instance.useSkinId == e.TASK_BINGFAZHANG ? (r.speed = 0, r.play(
                                        "idle", 0, 0), l && (l.speed = 0, l.play("idle", 0, 0)), o
                                    .Instance.actionData.push("idle")) : Pt.Instance.useSkinId == e
                                .TASK_LEISHENGCHUI ? (r.speed = .5, r.play(U.die_back, 0, 0), l && (l
                                    .speed = .5, l.play(U.die_back, 0, 0))) : Pt.Instance.useSkinId == e
                                .TASK_GUITAR && (r.speed = 1.5, r.play(U.die_guiter, 0, 0), l && (l
                                        .speed = 1.5, l.play(U.die_guiter, 0, 0)), o.Instance.actionData
                                    .push(U.die_guiter))
                        }
                    })
                }
        }
        bulletJS() {
            this.playJS(), this._speed = Rt.FAST_SPEED, this.updateForward(), Laya.timer.clear(this, this
                .changeSpeed), Laya.timer.once(1e3, this, this.changeSpeed)
        }
        changeSpeed() {
            this._currJSEff && (this._currJSEff.removeSelf(), this._currJSEff.destroy(), this._currJSEff =
                null), this._speed = Rt.SPEED, this.updateForward()
        }
        playJS() {
            this._currJSEff || (this._currJSEff = Laya.Sprite3D.instantiate(Laya.Loader.getRes(Yt
                .FX_jiashu_URL)), this.owner.parent.addChild(this._currJSEff))
        }
        set bulletScale(t) {
            this.owner.transform.localScale = new Laya.Vector3(t, t, t)
        }
        get bulletScale() {
            return this.owner.transform.localScale.x
        }
        destroyRb() {
            if (this.owner) {
                let t = this.owner.getComponent(Laya.Rigidbody3D);
                t && t.destroy(), this.owner.active = !1, this.owner.removeSelf(), this.owner.destroy()
            }
        }
        destroyBullet() {
            this.destroyRb(), this._exploded = !0, this.destroy()
        }
    }
    Rt.BASE_SPEED = .025, Rt.SPEED = Rt.BASE_SPEED, Rt.FAST_SPEED = 2 * Rt.SPEED, Rt.ROTATE_FACTOR = .12, Rt
        .CAMERA_DISTANCE = 3, Rt.CAMERA_FACTOR = Rt.CAMERA_DISTANCE, Rt.BOMB_DISTANCE = 3, Rt.RECORD_FRAME_INTERVAL = 8,
        Rt.MAX_MOVE_HIGHT = 12, Rt.JLS_SPEED = -.01, Rt.fam = 0,
        function(t) {
            t[t.BOSS_HIT = 1] = "BOSS_HIT", t[t.GLASS = 2] = "GLASS", t[t.WaspNest = 3] = "WaspNest", t[t.yugang = 4] =
                "yugang", t[t.useSkill = 5] = "useSkill", t[t.JLS = 6] = "JLS", t[t.SUN = 7] = "SUN", t[t.Woniu = 8] =
                "Woniu", t[t.Shanhu = 9] = "Shanhu", t[t.RanShaoFengChao = 10] = "RanShaoFengChao", t[t.Moon = 11] =
                "Moon"
        }(at || (at = {}));
    class Mt {
        constructor() {
            this._taskMap = {}
        }
        static get Instance() {
            return null == Mt._ins && (Mt._ins = new Mt), Mt._ins
        }
        init() {
            this._taskMap[e.TASK_MIFENG] = {
                times: 3,
                tips: "Forest Level Honeycomb Treasure Hunt"
            }, this._taskMap[e.TASK_DAHUANGYU] = {
                times: 1,
                tips: "Let The Fish Go Home"
            }, this._taskMap[e.TASK_HUAJI] = {
                times: 1,
                tips: "Bullets Turn Around And Aim At Yourself"
            }, this._taskMap[e.TASK_QIXINGJIAN] = {
                times: 7,
                tips: "Try Seven Combos For Headshot Damage"
            }, this._taskMap[e.TASK_QIUBITE] = {
                times: 2,
                tips: "Love Across Colors\n(Try The Blue Arrow Bullet)"
            }, this._taskMap[e.TASK_RULAI] = {
                times: 1,
                tips: "My Bullet Fell From The Sky"
            }, this._taskMap[e.TASK_FENGHUANG] = {
                times: 1,
                tips: "Hou Yi Shoots The Sun\n(Water Overcomes Fire)"
            }, this._taskMap[e.TASK_LONGXIA] = {
                times: 1,
                tips: "Ignite Fireworks In The Deep Sea"
            }, this._taskMap[e.TASK_SHOULIJIAN] = {
                times: 3,
                tips: "The Family Must Be Neat And Tidy\n(Bao Gourd)"
            }, this._taskMap[e.TASK_RANSHAOFENGCHAO] = {
                times: 1,
                tips: "Life And Destruction Are Together\n(Myth)"
            }, this._taskMap[e.TASK_RANSHAOWONIUKE] = {
                times: 3,
                tips: "Why Are You So Anxious?"
            }, this._taskMap[e.TASK_XUESEQISHAJIAN] = {
                times: 7,
                tips: "Seven Stars"
            }, this._taskMap[e.TASK_TUHAOJINGBI] = {
                times: 9999,
                tips: "Try To Save Money"
            }, this._taskMap[e.TASK_FENGHUANG_BING] = {
                times: 1,
                tips: "Purple Rabbit Flying To The Moon"
            }, this._taskMap[e.TASK_FENGHUANG_FENG] = {
                times: 1,
                tips: "Water And Sky Co-Exist, Yin And Spirit Become Wind"
            }, this._taskMap[e.TASK_FENGHUANG_LEI] = {
                times: 1,
                tips: "The Ice Is Thunder, And The Sun Turns The Phoenix"
            }, this._taskMap[e.TASK_FENGHUANG_AN] = {
                times: 1,
                tips: "Under The Earth, Endless Darkness"
            }, this._taskMap[e.TASK_YOULING] = {
                times: 1,
                tips: "Deep Sea Ghost"
            }, this._taskMap[e.TASK_DONGFENGKUAIDI] = {
                times: 2,
                tips: "At The Top Of The Twins, The Rocket Strikes"
            }, this._taskMap[e.TASK_QIQIAOZHEN] = {
                times: 2,
                tips: "Love Falls To The Sea, And The God Bird Returns It With Its Heart"
            }, this._taskMap[e.TASK_DANSHENGGOU] = {
                times: 1,
                tips: "Give The Nobles Unique Food\n(Above The Moon)"
            }, this._taskMap[e.TASK_LEISHENGCHUI] = {
                times: 1,
                tips: "Ancient Mythical Beast-Thunder, Unblocking The Sleeping Artifact (Romantic Island)"
            }, this._taskMap[e.TASK_BINGFAZHANG] = {
                times: 1,
                tips: "Bring A Crown To The Queen Of Ice And Snow"
            }, this._taskMap[e.TASK_GUITAR] = {
                times: 1,
                tips: "Eros' Arrow Hits A Single Dog"
            }, this._taskMap[e.WUCAI_FENGHUANG] = {
                times: 5,
                tips: "Unlock Five Phoenixes"
            }
        }
        checkAwardSkin() {
            if (this._currTaskData)
                for (let t in this._currTaskData) {
                    this._currTaskData[t] >= this._taskMap[t].times && (this._finishTask || (this._finishTask = []),
                        this._finishTask.push(parseInt(t)), console.log("Finish Task:", t))
                }
            this.unlockAwardSkin()
        }
        unlockAwardSkin() {
            if (this._finishTask && this._finishTask.length > 0) {
                let t = this._finishTask.shift();
                Gt.Instance.showUI(nt.CaiDanUnlock, {
                    skinId: t
                })
            } else Laya.stage.event(a.CAIDAN_UNLOCK_FINISH)
        }
        test() {
            this._currTaskData = {
                1021: 3,
                1023: 1
            }
        }
        bulletHitFengChao() {
            Pt.Instance.isSkinUnlock(e.TASK_MIFENG) || this.finishOnceCaidan(e.TASK_MIFENG)
        }
        bulletHitYuGang() {
            Pt.Instance.isSkinUnlock(e.TASK_DAHUANGYU) || -1 == e.HIT_YUGANG_SKIN_LIST.indexOf(Pt.Instance
                .useSkinId) || this.finishOnceCaidan(e.TASK_DAHUANGYU)
        }
        bulletHitPlayer() {
            Pt.Instance.isSkinUnlock(e.TASK_HUAJI) || this.finishOnceCaidan(e.TASK_HUAJI)
        }
        bulletHitHead(t) {
            Pt.Instance.isSkinUnlock(e.TASK_QIXINGJIAN) || (this._currTaskData || (this._currTaskData = {}), t ? (
                        this._currTaskData[e.TASK_QIXINGJIAN] || (this._currTaskData[e.TASK_QIXINGJIAN] = 0), this
                        ._currTaskData[e.TASK_QIXINGJIAN] += 1) : this._currTaskData[e.TASK_QIXINGJIAN] && this
                    ._currTaskData[e.TASK_QIXINGJIAN] < this._taskMap[e.TASK_QIXINGJIAN].times && (this
                        ._currTaskData[e.TASK_QIXINGJIAN] = 0), this._currTaskData[e.TASK_QIXINGJIAN] >= this
                    ._taskMap[e.TASK_QIXINGJIAN].times && (Pt.Instance.setSkinUnlock(e.TASK_QIXINGJIAN), Laya.stage
                        .event(a.GET_CAIDAN), this._caidanList || (this._caidanList = []), this._caidanList.push(e
                            .TASK_QIXINGJIAN))), !Pt.Instance.isSkinUnlock(e.TASK_RULAI) && t && o.Instance
                .maxHight >= Rt.MAX_MOVE_HIGHT && o.Instance.deads.length >= o.Instance.enemyInfo.total && this
                .finishOnceCaidan(e.TASK_RULAI), !Pt.Instance.isSkinUnlock(e.TASK_XUESEQISHAJIAN) && o.Instance
                .uesdSkill && this.finishOnceCaidan(e.TASK_XUESEQISHAJIAN)
        }
        bulletHitEnemyOrCivilian(t, i) {
            Pt.Instance.isSkinUnlock(e.TASK_QIUBITE) || Pt.Instance.useSkinId != e.BLUE_ARROW_SKIN || (this
                ._currTaskData || (this._currTaskData = {}), t ? (this._currTaskData[e.TASK_QIUBITE] ? i || (
                        this._currTaskData[e.TASK_QIUBITE] += 1) : this._currTaskData[e.TASK_QIUBITE] = i ? 1 :
                    0, this._currTaskData[e.TASK_QIUBITE] >= this._taskMap[e.TASK_QIUBITE].times && (Pt.Instance
                        .setSkinUnlock(e.TASK_QIUBITE), Laya.stage.event(a.GET_CAIDAN), this._caidanList || (
                            this._caidanList = []), this._caidanList.push(e.TASK_QIUBITE))) : this
                ._currTaskData[e.TASK_QIUBITE] = 0)
        }
        bulletHitSun() {
            return !Pt.Instance.isSkinUnlock(e.TASK_FENGHUANG) && e.BLUE_BINGSHUANG_SKIN == Pt.Instance.useSkinId &&
                this.finishOnceCaidan(e.TASK_FENGHUANG)
        }
        bulletHitShanhu() {
            return !Pt.Instance.isSkinUnlock(e.TASK_LONGXIA) && e.TASK_FENGHUANG == Pt.Instance.useSkinId && this
                .finishOnceCaidan(e.TASK_LONGXIA)
        }
        bulletHitWoniu() {
            return !Pt.Instance.isSkinUnlock(e.TASK_SHOULIJIAN) && e.BLUE_HULUWA_SKIN == Pt.Instance.useSkinId &&
                this.finishOnceCaidan(e.TASK_SHOULIJIAN)
        }
        bulletRanShaoFengChao() {
            return !Pt.Instance.isSkinUnlock(e.TASK_RANSHAOFENGCHAO) && e.TASK_FENGHUANG == Pt.Instance.useSkinId &&
                (!(e.TASK_RANSHAOFENGCHAO == e.TASK_SHOUCANGZHUANSHU && !Ht.Ins.isShoucangEnter()) && this
                    .finishOnceCaidan(e.TASK_RANSHAOFENGCHAO))
        }
        bulletTuHaoGold() {
            Pt.Instance.isSkinUnlock(e.TASK_TUHAOJINGBI) || Pt.Instance.gold >= this._taskMap[e.TASK_TUHAOJINGBI]
                .times && (Pt.Instance.setSkinUnlock(e.TASK_TUHAOJINGBI), Gt.Instance.hideUI(nt.Skin), Gt.Instance
                    .hideUI(nt.CaiDan), Gt.Instance.hideUI(nt.SkinUnlock), Gt.Instance.showUI(nt.CaiDanUnlock, {
                        skinId: e.TASK_TUHAOJINGBI
                    }))
        }
        bulletRanShaoWoniu() {
            if (!Pt.Instance.isSkinUnlock(e.TASK_RANSHAOWONIUKE) && e.TASK_SHOULIJIAN == Pt.Instance.useSkinId)
                return this.finishOnceCaidan(e.TASK_RANSHAOWONIUKE)
        }
        bulletFengHuang_Feng() {
            if (!Pt.Instance.isSkinUnlock(e.TASK_FENGHUANG_FENG) && e.TASK_YOULING == Pt.Instance.useSkinId)
            return this.finishOnceCaidan(e.TASK_FENGHUANG_FENG)
        }
        bulletFengHuang_Bing() {
            if (!Pt.Instance.isSkinUnlock(e.TASK_FENGHUANG_BING) && e.SHARE_SKINID == Pt.Instance.useSkinId)
            return this.finishOnceCaidan(e.TASK_FENGHUANG_BING)
        }
        bulletFengHuang_Lei() {
            return !Pt.Instance.isSkinUnlock(e.TASK_FENGHUANG_LEI) && e.BLUE_BINGSHUANG_SKIN == Pt.Instance
                .useSkinId && this.finishOnceCaidan(e.TASK_FENGHUANG_LEI)
        }
        bulletFengHuang_AN() {
            return !Pt.Instance.isSkinUnlock(e.TASK_FENGHUANG_AN) && -1 != e.FENGHUANG_SKIN_LIST.indexOf(Pt.Instance
                .useSkinId) && this.finishOnceCaidan(e.TASK_FENGHUANG_AN)
        }
        bulletYouling() {
            return !Pt.Instance.isSkinUnlock(e.TASK_YOULING) && e.BLUE_ZISE_HULUWA == Pt.Instance.useSkinId && this
                .finishOnceCaidan(e.TASK_YOULING)
        }
        bulletDongFengKuaiDi(t) {
            return !Pt.Instance.isSkinUnlock(e.TASK_DONGFENGKUAIDI) && e.BULLET_DAODAN_SKIN == Pt.Instance
                .useSkinId && (!(e.TASK_DONGFENGKUAIDI == e.TASK_SHOUCANGZHUANSHU && !Ht.Ins.isShoucangEnter()) && (
                    !(2 == t && (!this._currTaskData || this._currTaskData[e.TASK_DONGFENGKUAIDI] <= 0)) && (
                        this.finishOnceCaidan(e.TASK_DONGFENGKUAIDI), !0)))
        }
        bulletQiqiaozhen(t) {
            return !Pt.Instance.isSkinUnlock(e.TASK_QIQIAOZHEN) && -1 != e.FENGHUANG_SKIN_LIST.indexOf(Pt.Instance
                .useSkinId) && (!(2 == t && (!this._currTaskData || this._currTaskData[e.TASK_QIQIAOZHEN] <=
                0)) && (this.finishOnceCaidan(e.TASK_QIQIAOZHEN), !0))
        }
        bulletDanshengou() {
            return !Pt.Instance.isSkinUnlock(e.TASK_DANSHENGGOU) && e.BULLET_GOULIANG == Pt.Instance.useSkinId &&
                this.finishOnceCaidan(e.TASK_DANSHENGGOU)
        }
        bulletLeishengchui() {
            return !Pt.Instance.isSkinUnlock(e.TASK_LEISHENGCHUI) && e.TASK_FENGHUANG_LEI == Pt.Instance
                .useSkinId && this.finishOnceCaidan(e.TASK_LEISHENGCHUI)
        }
        bulletBingxuefazhang() {
            return !Pt.Instance.isSkinUnlock(e.TASK_BINGFAZHANG) && 4 == Pt.Instance.useAIFaceIndex && e
                .BULLET_WANGGUANG == Pt.Instance.useSkinId && this.finishOnceCaidan(e.TASK_BINGFAZHANG)
        }
        bulletWangfengjita() {
            return !Pt.Instance.isSkinUnlock(e.TASK_GUITAR) && e.TASK_QIUBITE == Pt.Instance.useSkinId && this
                .finishOnceCaidan(e.TASK_GUITAR)
        }
        finishOnceCaidan(t) {
            return this._currTaskData || (this._currTaskData = {}), this._currTaskData[t] || (this._currTaskData[
                t] = 0), this._currTaskData[t] += 1, this._currTaskData[t] >= this._taskMap[t].times && (Pt
                .Instance.setSkinUnlock(t), Laya.stage.event(a.GET_CAIDAN), this._caidanList || (this
                    ._caidanList = []), this._caidanList.push(t), !0)
        }
        getTaskData(t) {
            return this._taskMap[t]
        }
        clearData() {
            this._currTaskData = null, this._finishTask = null, this._caidanList = null
        }
        isUnlockCaidan() {
            return this._caidanList && this._caidanList.length > 0
        }
    }
    class Pt {
        constructor() {
            this._isLogin = !1, this._firstEnterGameTime = !1, this._level = 1, this._gold = 0, this._yaoshiCount =
                0, this._useSkinId = 0, this._firstShare = 0, this._openedCaiDanQing = 0, this._skillCount = 0, this
                ._firstLottery = 0, this._wrongClickCount = 0, this._shareZanCount = 0, this._tempUseSkinId = 0,
                this._useAIFaceIndex = -1, this._showQiXiUI = 0, this._buchang1 = 0, this._buchang2 = 0, this
                ._starCoin = 0, this._fishingTili = 0, this._fishingRecoverTime = 0, this._useYuganIndex = 0
        }
        static get Instance() {
            return null == this._ins && (this._ins = new Pt), this._ins
        }
        init() {
            if (localStorage.getItem("$zqss_gameData$")) this.gameDataArr = JSON.parse(localStorage.getItem(
                "$zqss_gameData$"));
            else {
                let t = {
                    "$%_THSS_Gold_%$": 0,
                    "$%_THSS_Level_%$": 1,
                    "$%_THSS_Skin_Video_Times_%$": {},
                    "$%_THSS_Yaoshi_%$": 0,
                    "$%_THSS_Use_SkinId_%$": e.DEFAULT_SKINID,
                    "$%_THSS_Skin_Unlock_%$": [1001],
                    "$%_THSS_UseVibrate_%$": 1,
                    "$%_THSS_UseSound_%$": 1,
                    "$%_THSS_Today_Sign_%$": 0,
                    "$%_THSS_Times_Sign_%$": 0,
                    "$%_THSS_See_Video_Lottery_Times_%$": 0,
                    "$%_THSS_First_Share_%$": 0,
                    "$%_THSS_Opened_CaiDanQiang_%$": 0,
                    "$%_THSS_Skill_Count_%$": 0,
                    "$%_THSS_First_Lottery_%$": 0,
                    "$%_THSS_Wrong_Click_Count_%$": [],
                    "$%_THSS_Skin_End_Time%$": {},
                    "$%_THSS_Share_Zan_Count_%$": 0,
                    "$%_THSS_Temp_Use_SkinId_%$": 0,
                    "$%_THSS_AI_Face_Unlock_%$": [],
                    "$%_THSS_Use_AI_Face_Index_%$": -1,
                    "$%_THSS_Show_QI_XI_UI_%$": 0,
                    "$%_THSS_Star_Coin_%$": 0,
                    "$%_THSS_Fishing_Mesh_%$": [],
                    "$%_THSS_Fishing_Tili_%$": O.FISHING_TILI,
                    "$%_THSS_Fishing_Recover_Time_%$": 0,
                    "$%_THSS_Fishing_Yugan_%$": [0],
                    "$%_THSS_Use_Yugan_Index_%$": 0,
                    "$%_THSS_Caidan_Tips_%$": [],
                    "$%_THSS_Exchage_Code_%$": []
                };
                this.gameDataArr = t, localStorage.setItem("$zqss_gameData$", JSON.stringify(t))
            }
            this._gold = this.gameDataArr[e.Local_Gold], this._level = this.gameDataArr[e.Local_Level], this
                ._yaoshiCount = this.gameDataArr[e.Local_Yaoshi], this._useSkinId = this.gameDataArr[e
                    .Local_UseSkinId], this._signToday = this.gameDataArr[e.Local_SignToday], this._signTimes = this
                .gameDataArr[e.Local_SignTimes], this._seeVideoLotteryTimes = this.gameDataArr[e
                    .Local_SeeVideoLotteryTimes], this._firstShare = this.gameDataArr[e.Local_FirstShare], this
                ._openedCaiDanQing = this.gameDataArr[e.Local_OpenedCaiDanQiang], this._skillCount = this
                .gameDataArr[e.Local_SkillCount], this._firstLottery = this.gameDataArr[e.Local_FirstLottery], this
                ._shareZanCount = this.gameDataArr[e.Local_ShareZanCount], this._tempUseSkinId = this.gameDataArr[e
                    .Local_TempUseSkinId], this._useAIFaceIndex = this.gameDataArr[e.Local_UseAIFaceIndex], this
                ._showQiXiUI = this.gameDataArr[e.Local_ShowQIXIUI], this._starCoin = this.gameDataArr[e
                    .Local_StarCoin], this._fishingTili = this.gameDataArr[e.Local_FishingTili], this
                ._fishingRecoverTime = this.gameDataArr[e.Local_FishingRecoverTime], this._useYuganIndex = this
                .gameDataArr[e.Local_UseYuganIndex], this._skinVideoTimes = this.gameDataArr[e
                .Local_SkinVideoTimes], this._skinEndTimeMap = this.gameDataArr[e.Local_SkinEndTime], this
                ._AIFaceUnlockList = this.gameDataArr[e.Local_AIFaceUnlock], this._fishingMeshList = this
                .gameDataArr[e.Local_FishingMesh], this._yuganList = this.gameDataArr[e.Local_FishingYugan], this
                ._caidanTipsList = this.gameDataArr[e.Local_CaidanTips], this._usedExchangeCodeList = this
                .gameDataArr[e.Local_ExchageCode], this._skinUnlockList = this.gameDataArr[e.Local_SkinUnlock], this
                ._skinUnlockList || (this.setSkinUnlock(e.DEFAULT_SKINID), this._firstEnterGameTime = !0,
                    localStorage.setItem("oldPlayer", "1")), n.Instance.useVibrate = this.gameDataArr[e
                    .Local_UseVibrate], n.Instance.useSound = this.gameDataArr[e.Local_UseSound]
        }
        onShowWX() {
            n.Instance.stopMusic(), n.Instance.playGameBgm()
        }
        set notLoadScene(t) {
            this._notLoadScene = t
        }
        get isFirstEnterGame() {
            return this._firstEnterGameTime
        }
        get level() {
            return this._level = this.getUserData(e.Local_Level, "number", 1), this._level
        }
        changeLevel(t) {
            r.isNumber(t) && parseInt(t) > this._level && (this._level = parseInt(t), this.saveUserData(e
                .Local_Level, "number", this._level, !0), this.setLocalStorageData(e.Local_Level, this
                ._level), Laya.stage.event(a.EVENT_UPDATE_LEVEL))
        }
        get gold() {
            return this._gold = this.getUserData(e.Local_Gold, "number", 0), this._gold
        }
        changeGold(t) {
            r.isNumber(t) || (t = 0), (t = parseInt(t)) > 0 && n.Instance.playGold(), this._gold += t, this
                .setLocalStorageData(e.Local_Gold, this._gold), Mt.Instance.bulletTuHaoGold(), Laya.stage.event(a
                    .EVENT_UPDATE_GOLD)
        }
        getSkinVideoTimes(t) {
            return this._skinVideoTimes = this.getUserData(e.Local_SkinVideoTimes, "object", null), this
                ._skinVideoTimes && this._skinVideoTimes[t] || 0
        }
        setSkinVideoTimes(t, i) {
            this._skinVideoTimes || (this._skinVideoTimes = {}), this._skinVideoTimes[t] = i, this
                .setLocalStorageData(e.Local_SkinVideoTimes, this._skinVideoTimes)
        }
        get yaoshiCount() {
            return this._yaoshiCount = this.getUserData(e.Local_Yaoshi, "number", 0), this._yaoshiCount
        }
        changeYaoshiCount(t) {
            r.isNumber(t) || (t = 0), this._yaoshiCount += parseInt(t), this.saveUserData(e.Local_Yaoshi, "number",
                    this._yaoshiCount, !0), this.setLocalStorageData(e.Local_Yaoshi, this._yaoshiCount), Laya.stage
                .event(a.EVENT_UPDATE_YAOSHI)
        }
        get useSkinId() {
            return this._useSkinId = this.getUserData(e.Local_UseSkinId, "number", e.DEFAULT_SKINID), this
                ._useSkinId
        }
        set useSkinId(t) {
            t >= e.SKIN_START && (this._useSkinId = t, this.saveUserData(e.Local_UseSkinId, "number", this
                    ._useSkinId, !0), this.setLocalStorageData(e.Local_UseSkinId, this._useSkinId), Laya.stage
                .event(a.CHANGE_BULLET, !!this._notLoadScene || null), this._notLoadScene = !1)
        }
        isSkinUnlock(t) {
            return !!r.isNumber(t) && (t = parseInt(t), this._skinUnlockList = this.getUserData(e.Local_SkinUnlock,
                "array", [e.DEFAULT_SKINID]), this._skinUnlockList && this._skinUnlockList.indexOf(t) >= 0)
        }
        get skinUnlockList() {
            return this._skinUnlockList = this.getUserData(e.Local_SkinUnlock, "array", [e.DEFAULT_SKINID]), this
                ._skinUnlockList
        }
        setSkinUnlock(t) {
            parseInt(t) >= e.SKIN_START && (this._skinUnlockList && -1 == this._skinUnlockList.indexOf("null") || (
                    this._skinUnlockList = []), -1 == this._skinUnlockList.indexOf(parseInt(t)) && this
                ._skinUnlockList.push(parseInt(t)), this.setLocalStorageData(e.Local_SkinUnlock, this
                    ._skinUnlockList), Laya.stage.event(a.EVENT_UPDATE_UNLOCKSIN))
        }
        notUnlockGoldSkinList() {
            let t = e.goldUnlockSkinList(),
                i = [];
            for (let e = 0; e < t.length; e++) this.isSkinUnlock(t[e]) || i.push(t[e]);
            return i
        }
        notUnlockSkinList() {
            let t = e.goldUnlockSkinList(),
                i = [];
            for (let e = 0; e < t.length; e++) this.isSkinUnlock(t[e]) || i.push(t[e]);
            for (let t = 0; t < e.KONGTOU_SKIN_LIST.length; t++) this.isSkinUnlock(e.KONGTOU_SKIN_LIST[t]) || i
                .push(e.KONGTOU_SKIN_LIST[t]);
            for (let t = 0; t < e.VIDEO_SKINID.length; t++) this.isSkinUnlock(e.VIDEO_SKINID[t]) || i.push(e
                .VIDEO_SKINID[t]);
            for (let t = 0; t < e.LOTTERY_SKIN_LIST.length; t++) this.isSkinUnlock(e.LOTTERY_SKIN_LIST[t]) || i
                .push(e.LOTTERY_SKIN_LIST[t]);
            return i
        }
        getSkinEndTime(t) {
            return this._skinEndTimeMap = this.getUserData(e.Local_SkinEndTime, "object", null), this
                ._skinEndTimeMap && this._skinEndTimeMap[t] || 0
        }
        setSkinEndTime(t, i) {
            this._skinEndTimeMap || (this._skinEndTimeMap = {}), this._skinEndTimeMap[t] = i, this
                .setLocalStorageData(e.Local_SkinEndTime, this._skinEndTimeMap)
        }
        get signToday() {
            return this._signToday = this.getUserData(e.Local_SignToday, "number", 0), this._signToday
        }
        set signToday(t) {
            r.isNumber(t) && (this._signToday = t, this.saveUserData(e.Local_SignToday, "number", this._signToday, !
                0), this.setLocalStorageData(e.Local_SignToday, this._signToday))
        }
        get signTimes() {
            return this._signTimes = this.getUserData(e.Local_SignTimes, "number", 0), this._signTimes
        }
        set signTimes(t) {
            r.isNumber(t) && (this._signTimes = t, this.saveUserData(e.Local_SignTimes, "number", this._signTimes, !
                0), this.setLocalStorageData(e.Local_SignTimes, this._signTimes))
        }
        get seeVideoLotteryTimes() {
            return this._seeVideoLotteryTimes = this.getUserData(e.Local_SeeVideoLotteryTimes, "number", 0), this
                ._seeVideoLotteryTimes
        }
        set seeVideoLotteryTimes(t) {
            r.isNumber(t) && (this._seeVideoLotteryTimes = t, this.saveUserData(e.Local_SeeVideoLotteryTimes,
                "number", this._seeVideoLotteryTimes, !0), this.setLocalStorageData(e
                .Local_SeeVideoLotteryTimes, this._seeVideoLotteryTimes))
        }
        get firstShare() {
            return this._firstShare = this.getUserData(e.Local_FirstShare, "number", 0), this._firstShare
        }
        set firstShare(t) {
            r.isNumber(t) && (this._firstShare = t, this.saveUserData(e.Local_FirstShare, "number", this
                ._firstShare, !0), this.setLocalStorageData(e.Local_FirstShare, this._firstShare))
        }
        get openedCaiDanQing() {
            return this._openedCaiDanQing = this.getUserData(e.Local_OpenedCaiDanQiang, "number", 0), this
                ._openedCaiDanQing
        }
        set openedCaiDanQing(t) {
            r.isNumber(t) && (this._openedCaiDanQing = t, this.saveUserData(e.Local_OpenedCaiDanQiang, "number",
                this._openedCaiDanQing, !0), this.setLocalStorageData(e.Local_OpenedCaiDanQiang, this
                ._openedCaiDanQing))
        }
        get skillCount() {
            return this._skillCount = this.getUserData(e.Local_SkillCount, "number", 0), this._skillCount
        }
        set skillCount(t) {
            r.isNumber(t) && (this._skillCount = t, this.saveUserData(e.Local_SkillCount, "number", this
                ._skillCount, !0), this.setLocalStorageData(e.Local_SkillCount, this._skillCount))
        }
        set firstLottery(t) {
            r.isNumber(t) && (this._firstLottery = t, this.saveUserData(e.Local_FirstLottery, "number", this
                ._firstLottery, !0), this.setLocalStorageData(e.Local_FirstLottery, this._firstLottery))
        }
        get firstLottery() {
            return this._firstLottery = this.getUserData(e.Local_FirstLottery, "number", 0), this._firstLottery
        }
        set wrongClickCount(t) {
            this._wrongClickCount = t;
            let i = this.getUserData(e.Local_WrongClickCount, "array", null);
            if (i) {
                i = JSON.parse(i);
                let t = parseInt(i[1]);
                Kt.isToday(t) || (this._wrongClickCount = 1)
            }
            let s = [this._wrongClickCount, Kt.now];
            this.setLocalStorageData(e.Local_WrongClickCount, s)
        }
        get wrongClickCount() {
            return this._wrongClickCount
        }
        get shareZanCount() {
            return this._shareZanCount = this.getUserData(e.Local_ShareZanCount, "number", 0), this._shareZanCount
        }
        set shareZanCount(t) {
            r.isNumber(t) && (this._shareZanCount = t, this.saveUserData(e.Local_ShareZanCount, "number", this
                ._shareZanCount, !0), this.setLocalStorageData(e.Local_ShareZanCount, this._shareZanCount))
        }
        get drawPoints() {
            return this._drawPoints
        }
        set drawPoints(t) {
            this._drawPoints = t
        }
        get tempUseSkinId() {
            return this._tempUseSkinId = this.getUserData(e.Local_TempUseSkinId, "number", 0), this._tempUseSkinId
        }
        set tempUseSkinId(t) {
            r.isNumber(t) && (this._tempUseSkinId = t, this.saveUserData(e.Local_TempUseSkinId, "number", this
                ._tempUseSkinId, !0), this.setLocalStorageData(e.Local_TempUseSkinId, this._tempUseSkinId))
        }
        get AIFaceUnlockList() {
            return this._AIFaceUnlockList = this.getUserData(e.Local_AIFaceUnlock, "array", null), this
                ._AIFaceUnlockList
        }
        isAIFaceUnlock(t) {
            return t = parseInt(t), this._AIFaceUnlockList = this.getUserData(e.Local_AIFaceUnlock, "array", null),
                this._AIFaceUnlockList && this._AIFaceUnlockList.indexOf(t) >= 0
        }
        setAIFaceUnlock(t) {
            this._AIFaceUnlockList && -1 == this._AIFaceUnlockList.indexOf("null") || (this._AIFaceUnlockList = []),
                -1 == this._AIFaceUnlockList.indexOf(parseInt(t)) && this._AIFaceUnlockList.push(parseInt(t)), this
                .setLocalStorageData(e.Local_AIFaceUnlock, this._AIFaceUnlockList)
        }
        get useAIFaceIndex() {
            return this._useAIFaceIndex = this.getUserData(e.Local_UseAIFaceIndex, "number", -1), this
                ._useAIFaceIndex
        }
        set useAIFaceIndex(t) {
            r.isNumber(t) && (this._useAIFaceIndex = t, this.saveUserData(e.Local_UseAIFaceIndex, "number", this
                ._useAIFaceIndex, !0), this.setLocalStorageData(e.Local_UseAIFaceIndex, this
                ._useAIFaceIndex))
        }
        get showQiXiUI() {
            return this._showQiXiUI = this.getUserData(e.Local_ShowQIXIUI, "number", 0), this._showQiXiUI
        }
        set showQiXiUI(t) {
            r.isNumber(t) && (this._showQiXiUI = t, this.saveUserData(e.Local_ShowQIXIUI, "number", this
                ._showQiXiUI, !0), this.setLocalStorageData(e.Local_ShowQIXIUI, this._showQiXiUI))
        }
        get buchang1() {
            return this._buchang1 = this.getUserData(e.Local_Buchang1, "number", 0), this._buchang1
        }
        get buchang2() {
            return this._buchang2 = this.getUserData(e.Local_Buchang2, "number", 0), this._buchang2
        }
        changeBuchang1(t) {
            r.isNumber(t) || (t = 0), t = parseInt(t), this._buchang1 += t, this.saveUserData(e.Local_Buchang1,
                "number", this._buchang1, !0), this.setLocalStorageData(e.Local_Buchang1, this._buchang1)
        }
        changeBuchang2(t) {
            r.isNumber(t) || (t = 0), t = parseInt(t), this._buchang2 += t, this.saveUserData(e.Local_Buchang2,
                "number", this._buchang2, !0), this.setLocalStorageData(e.Local_Buchang2, this._buchang2)
        }
        get starCoin() {
            return this._starCoin = this.getUserData(e.Local_StarCoin, "number", 0), this._starCoin
        }
        changeStarCoin(t) {
            r.isNumber(t) || (t = 0), t = parseInt(t), this._starCoin += t, this.saveUserData(e.Local_StarCoin,
                    "number", this._starCoin, !0), this.setLocalStorageData(e.Local_StarCoin, this._starCoin), Laya
                .stage.event(a.EVENT_UPDATE_STARCOIN, t)
        }
        get fishingMeshUnlockList() {
            return this._fishingMeshList = this.getUserData(e.Local_FishingMesh, "array", null), this
                ._fishingMeshList
        }
        isFishingMeshUnlock(t) {
            return t = parseInt(t), this.fishingMeshUnlockList && this.fishingMeshUnlockList.indexOf(t) >= 0
        }
        setFishingMeshUnlock(t) {
            this._fishingMeshList && -1 == this._fishingMeshList.indexOf("null") || (this._fishingMeshList = []), -
                1 == this._fishingMeshList.indexOf(parseInt(t)) && this._fishingMeshList.push(parseInt(t)), this
                .setLocalStorageData(e.Local_FishingMesh, this._fishingMeshList)
        }
        get fishingTili() {
            return this._fishingTili = this.getUserData(e.Local_FishingTili, "number", O.FISHING_TILI), this
                ._fishingTili
        }
        changeFishingTili(t) {
            r.isNumber(t) || (t = 0), t = parseInt(t), this._fishingTili += t, this.saveUserData(e
                .Local_FishingTili, "number", this._fishingTili, !0), this.setLocalStorageData(e
                .Local_FishingTili, this._fishingTili), Laya.stage.event(a.EVENT_UPDATE_FISHTILI)
        }
        get fishingRecoverTime() {
            return this._fishingRecoverTime = this.getUserData(e.Local_FishingRecoverTime, "number", 0), this
                ._fishingRecoverTime
        }
        set fishingRecoverTime(t) {
            r.isNumber(t) && (this._fishingRecoverTime = t, this.saveUserData(e.Local_FishingRecoverTime, "number",
                this._fishingRecoverTime, !0), this.setLocalStorageData(e.Local_FishingRecoverTime, this
                ._fishingRecoverTime))
        }
        get yuganUnlockList() {
            return this._yuganList = this.getUserData(e.Local_FishingYugan, "array", null), this._yuganList
        }
        isYuganUnlock(t) {
            return t = parseInt(t), this.yuganUnlockList && this.yuganUnlockList.indexOf(t) >= 0
        }
        setYuganUnlock(t) {
            this._yuganList && -1 == this._yuganList.indexOf("null") || (this._yuganList = []), -1 == this
                ._yuganList.indexOf(parseInt(t)) && this._yuganList.push(parseInt(t)), this.setLocalStorageData(e
                    .Local_FishingYugan, this._yuganList)
        }
        set useYuganIndex(t) {
            r.isNumber(t) && (this._useYuganIndex = t, this.saveUserData(e.Local_UseYuganIndex, "number", this
                ._useYuganIndex, !0), this.setLocalStorageData(e.Local_UseYuganIndex, this._useYuganIndex))
        }
        get useYuganIndex() {
            return this._useYuganIndex = this.getUserData(e.Local_UseYuganIndex, "number", 0), this._useYuganIndex
        }
        isCaidanTipsUnlock(t) {
            return this._caidanTipsList = this.getUserData(e.Local_CaidanTips, "array", null), this
                ._caidanTipsList && this._caidanTipsList.indexOf(t) >= 0
        }
        setCaidanTipsUnlock(t) {
            (!this._caidanTipsList || this._caidanTipsList instanceof Array) && (this._caidanTipsList = []), -1 ==
                this._caidanTipsList.indexOf(parseInt(t)) && this._caidanTipsList.push(parseInt(t)), this
                .setLocalStorageData(e.Local_CaidanTips, this._caidanTipsList)
        }
        isUsedExchangeCode(t) {
            return this._usedExchangeCodeList = this.getUserData(e.Local_ExchageCode, "array", null), this
                ._usedExchangeCodeList && this._usedExchangeCodeList.indexOf(t) >= 0
        }
        setUsedExChangeCode(t) {
            this._usedExchangeCodeList && -1 == this._usedExchangeCodeList.indexOf("null") || (this
                    ._usedExchangeCodeList = []), -1 == this._usedExchangeCodeList.indexOf(t) && this
                ._usedExchangeCodeList.push(t), this.setLocalStorageData(e.Local_ExchageCode, this
                    ._usedExchangeCodeList)
        }
        handleDataTransfer(t, e, i) {
            let s = this.getLocalStorageData(t, e, i);
            return this.setLocalStorageData(t, s), s
        }
        getUserData(t, e, i) {
            return this.gameDataArr[t]
        }
        saveUserData(t, e, i, s) {}
        getLocalStorageData(t, e = "string", i = 0) {
            return this.gameDataArr[t]
        }
        setLocalStorageData(t, e) {
            this.gameDataArr[t] = e, localStorage.setItem("$zqss_gameData$", JSON.stringify(this.gameDataArr))
        }
        get isLogin() {
            return this._isLogin
        }
        set isLogin(t) {
            this._isLogin = t
        }
    }! function(t) {
        t[t.UNLOAD = 0] = "UNLOAD", t[t.ENABLED = 1] = "ENABLED", t[t.UNENABLED = 2] = "UNENABLED"
    }(ot || (ot = {}));
    class Ot {
        constructor() {
            this.appBoxBtn = void 0, this.banners = [], this.video = null, this.interstitial = [], this
                .moreGamesBanner = void 0, this.isMoreGamesBanner = !1
        }
        static get Instance() {
            return Ot._ins || (Ot._ins = new Ot), Ot._ins
        }
        getVideoById(t) {
            return this.video || (this.video = {
                id: t,
                inst: null,
                state: ot.UNLOAD
            }), this.video
        }
        loadVideo(t, e = !1) {
            e && window.tt.showLoading({
                title: "Ad Loading",
                success(t) {
                    console.log("Advertising Loading" + `${t}`)
                },
                fail(t) {
                    console.log("Showloading Call Failed")
                }
            });
            var i = this;
            let s = this.getVideoById(t);
            s.inst ? (console.log("loadVideo -------loadVideo------ loadVideo"), s.inst.load().catch(function(t) {
                s.state = ot.UNENABLED, console.log("Rewarded Video Ad Failed To Show"), i.playFail("Ad Loading Failed")
            })) : (s.inst = window.tt.createRewardedVideoAd({
                adUnitId: s.id
            }), s.inst.onLoad(function() {
                console.log("Rewarded Video Ad Loaded Successfully"), Laya.MouseManager.enabled || (Laya.MouseManager.enabled = !
                    0), s.state = ot.ENABLED, e && this.showVideo(s.id), window.tt.hideLoading()
            }), s.inst.onError(function(t) {
                console.log("????????????Ad Loading Failed"), Laya.MouseManager.enabled || (Laya.MouseManager.enabled = !
                    0), s.state = ot.UNENABLED, window.tt.hideLoading(), e && i.playFail("Ad Loading Failed")
            }), s.inst.onClose(function(t) {
                console.log("-----------video.inst.onClose-----------", t), t && t.isEnded ? (Laya
                    .MouseManager.enabled || (Laya.MouseManager.enabled = !0), i.playSuccess()) : (
                    Laya.MouseManager.enabled || (Laya.MouseManager.enabled = !0), i.playFail(
                        "You Can Get Rewards Only After Watching"), console.log("You Can Get Rewards Only After Watching"))
            }))
        }
        showVideo(t) {
            window.tt.showLoading({
                title: "Ad Loading",
                success(t) {
                    console.log("Advertising Loading" + `${t}`)
                },
                fail(t) {
                    console.log("Showloading Call Failed")
                }
            });
            let e = this.getVideoById(t);
            var i = this;
            e && e.inst && e.inst.show().then(() => {
                window.tt.hideLoading()
            }).catch(() => {
                e.inst.load().then(() => e.inst.show()).catch(t => {
                    e.state = ot.UNENABLED, console.log("Rewarded Video Ad Failed To Show"), i.playFail("Ad Loading Failed")
                })
            })
        }
        preloadVideo(t) {
            let e = this.getVideoState(t);
            ot.UNLOAD === e && this.loadVideo(t)
        }
        getVideoState(t) {
            let e = this.getVideoById(t);
            return e ? e.state : ot.UNLOAD
        }
        playVideo(t, e) {
            window.adsMgr && window.adsMgr.showVideoAd(e.success, e.fail)
        }
        playFail(t) {
            window.tt && window.tt.hideLoading(), this.showToast(t), this._options && "function" == typeof this
                ._options.fail && this._options.fail(), this._options = null, console.log("Close Showloading")
        }
        playSuccess() {
            this._options && "function" == typeof this._options.success && this._options.success(this._options
                .param), this._options = null
        }
        showToast(t) {
            window.tt && (console.log("showToast", t), Laya.timer.once(500, this, () => {
                _.show(t)
            }))
        }
    }
    class Bt {}
    Bt.getLocation = !1, Bt.useOpenid = !0, Bt.gameId = "20135";
    class Ft {
        static get instance() {
            return Ft._instance || (Ft._instance = new Ft)
        }
        init() {
            this.getPlatform(), this.checkSDK(), this.getUUID(), this.setNewPlayer()
        }
        login() {
            var t = this;
            return new Promise(async function(e, i) {
                if (Ft.platformFlag) {
                    void 0 !== window.qg && Ft.platform.login({
                        force: !1,
                        async success(i) {
                            let s = {};
                            i.code && (s.code = i.code), i.anonymousCode && (s
                                .anonymousCode = i.anonymousCode);
                            var n = await t.request(Ft.gameUrl, s, "login");
                            n.data.openid && (Ft.useOpenid && t.setOpenid(n.data.openid), t
                                .setNewPlayer(n.data.new_player, n.data.reg_date));
                            let a = Vt.instance.decode(n.data.save);
                            a = a || "{}", n.data.save = JSON.parse(a), console.log(
                                `loginRes.data.save${i.code} ${i.anonymousCode}`), e(n
                                .data), console.log(
                                `Login Call Succeeded${i.code} ${i.anonymousCode}`)
                        },
                        fail(t) {
                            console.log("Login Call Failed")
                        }
                    })
                } else {
                    var s = await t.request(Ft.gameUrl, {}, "login");
                    s.data.openid && (Ft.useOpenid && t.setOpenid(s.data.openid), t.setNewPlayer(s.data
                        .new_player, s.data.reg_date));
                    let i = Vt.instance.decode(s.data.save);
                    i = i || "{}", s.data.save = JSON.parse(i), e(s.data)
                }
            })
        }
        getPlatform() {
            Ft.gameId = Bt.gameId, Ft.getLocation = Bt.getLocation, Ft.useOpenid = Bt.useOpenid, Ft.gameId ||
                console.error("Missing Gameid Configuration"), void 0 !== window.tt ? (Ft.platform = window.tt, Ft.platformFlag = !0,
                    Ft.platformId = 1, console.log("Current Platform: Headlines")) : "undefined" != typeof qg && qg.request ? (Ft
                    .platform = qg, Ft.platformFlag = !0, Ft.platformId = 3, console.log("Current Platform: Oppo")) :
                "undefined" != typeof wx ? (Ft.platform = wx, Ft.platformFlag = !0, Ft.platformId = 5, console.log(
                    "Current Platform: Wechat")) : (window.getStorageSync = function(t) {
                    return window.localStorage.getItem(t)
                }, window.setStorageSync = function(t, e) {
                    window.localStorage.setItem(t, e)
                }, window.request = function(t) {
                    var e;
                    (e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"))
                    .onreadystatechange = function(i) {
                        if (4 == e.readyState && 200 == e.status) {
                            let e = "";
                            console.log("res----------------", i), i && i.target && i.target.response && (
                                e = JSON.parse(i.target.response)), t.success && t.success({
                                data: e
                            })
                        }
                    };
                    var i = t.url;
                    if (t.data) {
                        i += "?" + Object.keys(t.data).map(function(e) {
                            return encodeURIComponent(e) + "=" + encodeURIComponent(t.data[e])
                        }).join("&")
                    }
                    e.open("GET", i, !0), e.send()
                }, Ft.platform = window, Ft.platformId = -1, Ft.platformFlag = !1, console.error(
                    "Platform Acquisition Failed???, Default Regular Web"))
        }
        static sendVideo(t) {
            Ft.instance.send(Ft.logerUrl, t, "video")
        }
        static sendEvent(t, e = "") {
            let i = {
                eventName: t,
                params: e
            };
            Ft.instance.send(Ft.logerUrl, i, "event")
        }
        static updateSave(t) {
            if (!t) return;
            let e = {},
                i = JSON.stringify(t);
            "" != i && (e.save = Vt.instance.encode(i), Ft.instance.send(Ft.gameUrl, e, "updateSave"))
        }
        static async getSave() {
            return new Promise(async function(t, e) {
                var i = {};
                if (Ft.useOpenid)
                    if (Ft.instance.getOpenid()) {
                        i = await Ft.instance.request(Ft.gameUrl, {}, "getSave");
                        let e = Vt.instance.decode(i.data);
                        e = e || "{}", i.data = JSON.parse(e), t(i)
                    } else console.log("??????openid?????????1000??????..."), setTimeout(async function() {
                        if (Ft.instance.getOpenid()) {
                            i = await Ft.instance.request(Ft.gameUrl, {}, "getSave");
                            let e = Vt.instance.decode(i.data);
                            e = e || "{}", i.data = JSON.parse(e), t(i)
                        } else t(-1)
                    }, 1e3);
                else {
                    i = await Ft.instance.request(Ft.gameUrl, {}, "getSave");
                    let e = Vt.instance.decode(i.data);
                    e = e || "{}", i.data = JSON.parse(e), t(i)
                }
            })
        }
        static sendTest(t) {
            Ft.instance.send(Ft.logerUrl, {}, "test")
        }
        checkSDK() {
            Ft.platform.request({
                url: Ft.logerUrl + "/static/app.json",
                method: "GET",
                success: function(t) {
                    200 === t.data.code && t.data.data.version > Ft.localVersion && console.error(
                        "Your Reported SDK Is Not The Latest Version, Please Upgrade As Soon As Possible!")
                }
            })
        }
        setOpenid(t) {
            Ft.platform.setStorageSync("sxy_openid", t), Ft.openid = t
        }
        getUUID() {
            var t = "";
            try {
                t = Ft.platform.getStorageSync("sxy_uuid")
            } catch (e) {
                t = "uuid_default"
            }
            if (!t) {
                t = this.create_uuid();
                try {
                    Ft.platform.setStorageSync("sxy_uuid", t)
                } catch (t) {
                    Ft.platform.setStorageSync("sxy_uuid", "uuid_default")
                }
            }
            return t
        }
        setNewPlayer(t = "", e = "") {
            if ("" !== t && "" !== e) Ft.platform.setStorageSync("sxy_new_player", t), Ft.platform.setStorageSync(
                "sxy_reg_date", e);
            else {
                var i = Ft.platform.getStorageSync("sxy_reg_date"),
                    s = Ft.formatDate(new Date);
                i ? s > i && Ft.platform.setStorageSync("sxy_new_player", !1) : (Ft.platform.setStorageSync(
                    "sxy_new_player", !0), Ft.platform.setStorageSync("sxy_reg_date", s))
            }
        }
        static formatDate(t) {
            var e = t.getFullYear(),
                i = t.getMonth() + 1,
                s = t.getDate();
            return i < 10 && (i = "0" + i), s < 10 && (s = "0" + s), e + "-" + i + "-" + s
        }
        getOpenid() {
            return window.qg && Ft.platform.getStorageSync("sxy_openid") || Ft.openid || ""
        }
        create_uuid() {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return e() + e() + e() + e() + e() + e() + e() + e()
        }
        async send(t, e, i) {
            var s = this.getOpenid();
            if (e.action = i, Ft.useOpenid) {
                if (Ft.queue.push({
                        url: t,
                        data: e
                    }), s) {
                    let t = Ft.queue;
                    Ft.queue = [];
                    for (let e = 0; e < t.length; e++) this.request(t[e].url, t[e].data, t[e].data.action)
                }
            } else this.request(t, e, i)
        }
        request(t, e, i) {
            var s = this;
            return new Promise(function(n, a) {
                e.gameId = Ft.gameId, e.platform = Ft.platformId, e.session_key = Ft.session_key || "", e
                    .openid = s.getOpenid(), e.uuid = s.getUUID(), e.avatar = Ft.avatar || "", e.action = i,
                    Ft.paramJoin(e), Ft.platform.request({
                        url: t + "/index/api.do",
                        data: e,
                        header: {},
                        method: "GET",
                        fail: function(t) {
                            a(t.data)
                        },
                        success: function(t) {
                            n(t.data)
                        }
                    })
            })
        }
        static paramJoin(t) {
            t.newPlayer = Ft.platform.getStorageSync("sxy_new_player")
        }
    }
    Ft.localVersion = "1.0.6", Ft.logerUrl = "", Ft.gameUrl = "", Ft.gameId = "", Ft.openid = "", Ft.getLocation = !1,
        Ft.useOpenid = !1, Ft.platformFlag = !0, Ft.queue = [], Ft.stage = {
            onStart: function(t) {
                t.method = "start", Ft.instance.send(Ft.logerUrl, t, "stage")
            },
            onRunning: function(t) {
                t.method = "running", Ft.instance.send(Ft.logerUrl, t, "stage")
            },
            onEnd: function(t) {
                t.method = "end", Ft.instance.send(Ft.logerUrl, t, "stage")
            }
        };
    class Vt {
        constructor() {
            Vt._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Vt.key = "sxy2020!"
        }
        static get instance() {
            return Vt._instance || (Vt._instance = new Vt)
        }
        encode(t) {
            for (var e = this.utf8Encode(Vt.key), i = this.utf8Encode(t), s = e.length, n = 0; n < i.length; n++) {
                var a = i[n];
                a ^= e[n % s], i[n] = a
            }
            return this.base64Encode(i, !0)
        }
        decode(t) {
            for (var e = this.base64Decode(t, !0), i = this.utf8Encode(Vt.key), s = i.length, n = 0; n < e
                .length; n++) {
                var a = e[n];
                a ^= i[n % s], e[n] = a
            }
            return this.utf8Decode(e)
        }
        base64Encode(t, e) {
            for (var i, s, n, a, o, h, r, l = "", c = 0, _ = e ? t : this.utf8Encode(t); c < _.length;) a = (i = _[
                    c++]) >> 2, o = (3 & i) << 4 | (s = _[c++]) >> 4, h = (15 & s) << 2 | (n = _[c++]) >> 6, r =
                63 & n, isNaN(s) ? h = r = 64 : isNaN(n) && (r = 64), l = l + Vt._keyStr.charAt(a) + Vt._keyStr
                .charAt(o) + Vt._keyStr.charAt(h) + Vt._keyStr.charAt(r);
            return l
        }
        base64Decode(t, e) {
            var i, s, n, a, o, h, r = 0;
            t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            for (var l = []; r < t.length;) i = Vt._keyStr.indexOf(t.charAt(r++)) << 2 | (a = Vt._keyStr.indexOf(t
                    .charAt(r++))) >> 4, s = (15 & a) << 4 | (o = Vt._keyStr.indexOf(t.charAt(r++))) >> 2, n = (3 &
                    o) << 6 | (h = Vt._keyStr.indexOf(t.charAt(r++))), l.push(i), 64 != o && l.push(s), 64 != h && l
                .push(n);
            return !0 === e ? l : this.utf8Decode(l)
        }
        utf8Encode(t) {
            t = t.replace(/\r\n/g, "\n");
            for (var e = [], i = 0; i < t.length; i++) {
                var s = t.charCodeAt(i);
                s < 128 ? e.push(s) : s > 127 && s < 2048 ? (e.push(192 | s(s >> 6)), e.push(63 & s | 128)) : (e
                    .push(s >> 12 | 224), e.push(s >> 6 & 63 | 128), e.push(63 & s | 128))
            }
            return e
        }
        utf8Decode(t) {
            for (var e, i, s = "", n = 0, a = 0; n < t.length;)(e = t[n]) < 128 ? (s += String.fromCharCode(e),
                n++) : e > 191 && e < 224 ? (i = t[n + 1], s += String.fromCharCode((31 & e) << 6 | 63 & i), n +=
                2) : (i = t[n + 1], a = t[n + 2], s += String.fromCharCode((15 & e) << 12 | (63 & i) << 6 | 63 & a),
                    n += 3);
            return s
        }
    }
    class Ht {
        constructor() {
            this._appid = "tt3093462eafa9fbca", this._appscecret = "1a09aa084dd7a7acc0602ce5733bdcbc293ffc3f", this
                ._videoid = "58g668k2fl13kcdkf8", this._bannerid = "1slgakfbs7a4j910be", this._shareid = [
                    "23j3345b44j6dmweon", "3aek7169j1le1gd00k"
                ], this._shareTitle = ["My Bullet Will Turn!", "Control The Bullets And Hit The Enemy With One Hit!", "The New Hidden Easter Eggs Are Coming!"], this._shareDes = ["My Bullet Will Turn!",
                    "Control The Bullets And Hit The Enemy With One Hit!", "The New Hidden Easter Eggs Are Coming!"
                ], this._shareVideoTopic = ["Top Shooter", "Hidden Easter Eggs", "Shooting", "Douyin Games"], this._openidUrl = "", this._openid = "",
                this._isLogin = !1, this._locCity = "", this._gameId = 20135, this._version = "1.7.2", this
                ._config = null, this._serverDec = 0, this._isStarRecord = !1, this._recordTime = 0
        }
        get adVideoid() {
            return this._videoid
        }
        static get Ins() {
            return Ht._Ins || (Ht._Ins = new Ht), Ht._Ins
        }
        init() {
            this.initConfig(), this.updateServerTime(), this.initBanner(), this.initMoreGameBanner(), this
                .initRecoder(), this.initShareInterface(), Laya.LocalStorage.getItem("showFavorateGuide") || (this
                    .showFavorateGuide(), Laya.LocalStorage.setItem("showFavorateGuide", "true"))
        }
        initConfig() {
            console.log("-------------initConfig--------------");
            var t = this;
            window.tt && window.tt.request({
                url: "",
                success: e => {
                    console.log("initConfig --------------res:", e), t._shareid = e.data.shareid, t
                        ._config = e.data, t._offcitys = e.data && e.data.offcitys, t._navigateAppList =
                        e.data && e.data.navigateAppList, K.Instance.init()
                }
            });
            let e = window.tt && window.tt.getLaunchOptionsSync();
            this._enterScene = e && e.scene, console.log("--------------------------getLaunchOptionsSync:", e);
            let i = e.scene;
            console.log("--------------------------qdcs.query.scene:", i)
        }
        getUserLocation() {
            var t = this;
            var e = new XMLHttpRequest;
            e.onreadystatechange = (() => {
                if (4 == e.readyState)
                    if (e.status >= 200 && e.status < 400) {
                        var i = e.responseText;
                        if ("" != i && null != i && null != i) {
                            var s = JSON.parse(i);
                            t.userCity = s.loc[2], console.log("log--------------------userCity=:", t
                                .userCity)
                        }
                    } else console.log("req??fail")
            }), e.open("GET", "", !0), e.send()
        }
        updateServerTime() {
            var t = this;
            window.tt && window.tt.request({
                url: "",
                success: e => {
                    t.userCity = e.data.loc[2], console.log("log--------------------userCity=:", t
                        .userCity);
                    var i = new Date(e.data.nowtime);
                    t._serverDec = i.getTime() - Laya.Browser.now(), isNaN(t._serverDec) && (t
                        ._serverDec = 0)
                }
            }), Laya.timer.once(6e4, this, this.updateServerTime)
        }
        checkUpdate() {
            try {
                if (window.tt && window.tt && "function" == typeof window.tt.getUpdateManager) {
                    const t = window.tt.getUpdateManager();
                    t.onCheckForUpdate(function(t) {
                        console.log(t.hasUpdate)
                    }), t.onUpdateReady(() => {
                        window.tt.showModal({
                            title: "Update Reminder",
                            content: "There Is A New Version! Hurry Up And Start A New Journey~",
                            success: function(e) {
                                e.confirm ? t.applyUpdate() : window.tt.showToast({
                                    icon: "none",
                                    title: "The New Version Will Be Used The Next Time It Starts"
                                })
                            }
                        })
                    }), t.onUpdateFailed(function() {
                        console.log("Failed To Download The New Version")
                    })
                }
            } catch (t) {
                console.log(" error checkUpdate")
            }
        }
        getGongGao() {
            return this._config ? this._config.noticeHtmlText : ""
        }
        isAuditCity() {
            return !this._config || !this.userCity || !!(this._config.offcitys && this._config.offcitys.indexOf(this
                .userCity) >= 0)
        }
        initCity() {
            var t = this;
            window.tt && window.tt.request({
                url: "",
                success: e => {
                    t._locCity = e.data && e.data.loc[2]
                }
            })
        }
        isCheckVersion() {
            return !this._config || this._config.version == this._version
        }
        isOpenNewShareRecord() {
            return !!this._config && (this._config.version == this._version || (!!this.isAuditCity() || 0 == Number(
                this._config.isScreenCap)))
        }
        isScreenCap() {
            return this._config ? this._config.version == this._version ? 0 : this.isAuditCity() ? 0 : parseInt(this
                ._config.isScreenCap) : 0
        }
        getExchangeCode() {
            return this._config ? this._config.exCode : null
        }
        get addelay() {
            return this._config ? this._config.version == this._version ? 0 : this.isAuditCity() ? 0 : 1e3 *
                parseInt(this._config.addelay) : 0
        }
        isAuditing() {
            return !this._config || this._config.version == this._version
        }
        openDanger() {
            return this._config ? this._config.version == this._version ? 0 : this.isAuditCity() ? 0 : parseInt(this
                ._config.openDanger) : 0
        }
        adcd() {
            return this._config ? this._config.version == this._version ? 0 : this.isAuditCity() ? 0 : parseInt(this
                ._config.adcd) : 0
        }
        openWrongClick() {
            if (!this._config) return 0;
            if (this._config.version == this._version) return console.log("version not WrongClick"), 0;
            if (this.isAuditCity()) return console.log("isAuditCity not WrongClick"), 0;
            if (!this._config.aderrormaxcount) return console.log("aderrormaxcount not WrongClick"), 0;
            if (Pt.Instance.level < 11) return console.log("The Current Level Is Less Than 10, not WrongClick"), 0;
            let t = Pt.Instance.wrongClickCount;
            if (t >= parseInt(this._config.aderrormaxcount)) return console.log("Already The Maximum Number Of Wrongclicks Of The Day:", t), 0;
            let e = this._config.aderrorrate ? Number(this._config.aderrorrate) : .5,
                i = Math.random();
            return e > i ? (Pt.Instance.wrongClickCount += 1, console.log("Wrongclick Succeeded--aderrorrate:" + e + ",r:" +
                i + ",Wrongclick Today:" + Pt.Instance.wrongClickCount + "Times"), 1) : (console.log(
                "Wrongclick Failed--aderrorrate:" + e + ",r:" + i), 0)
        }
        loginByteDance() {
            var t = this;
            window.tt && window.tt.login({
                force: !1,
                success: function(e) {
                    console.log("log---------login success---------res=:", e), t._openidUrl = t._appid +
                        "&secret=" + t._appscecret + "&code=" + e.code + "&anonymous_code=" + e
                        .anonymousCode, console.log("log---------tokenUrl=:", t._openidUrl), t
                        .getOpenId(), t._isLogin = e.isLogin
                },
                fail: function(t) {
                    console.log("log---------login fail---------", t)
                }
            })
        }
        getUserInfo() {
            window.tt && window.tt.getUserInfo({
                success(t) {
                    console.log(`getUserInfo Succeeded In Obtaining User Information ${t.userInfo}`, t)
                },
                fail(t) {
                    console.log("getUserInfo Failed To Obtain User Information", t)
                }
            })
        }
        getOpenId() {
            var t = this;
            window.tt && window.tt.request({
                url: t._openidUrl,
                success: e => {
                    t._openid = e.data.openid || "no_login", console.log("self._openid:" + t._openid)
                }
            })
        }
        initShareInterface() {
            var t = this;
            window.tt && window.tt.showShareMenu({
                withShareTicket: !0
            }), window.tt && window.tt.onShareAppMessage(function(e) {
                return {
                    title: t._shareTitle[Math.floor(Math.random() * t._shareTitle.length)],
                    templateId: t._shareid[Math.floor(Math.random() * t._shareid.length)],
                    query: "k1=v1&k2=v2",
                    success() {
                        console.log("Successful Sharing")
                    },
                    fail(t) {
                        console.log("Sharing Failed", t)
                    }
                }
            })
        }
        initBanner() {
            if (window.tt) {
                var t = this;
                console.log("***********banner Ad Refresh************");
                var e = window.tt.getSystemInfoSync();
                this._banner && this._banner.destroy(), this._banner = window.tt.createBannerAd({
                    adUnitId: t._bannerid,
                    adIntervals: 30,
                    style: {
                        width: 200,
                        top: e.windowHeight - 112.5
                    }
                }), this._banner.onResize(i => {
                    t._banner.style.top = e.windowHeight - i.height, t._banner.style.left = (e.windowWidth -
                        i.width) / 2
                }), this._banner.onLoad(function(t) {}), this._banner.onError(function(t) {
                    console.log("Advertising Error:" + t.errMsg + "," + t.errCode)
                }), this.hideBanner()
            }
        }
        initMoreGameBanner() {
            if (window.tt) {
                var t = this,
                    e = window.tt.getSystemInfoSync();
                this._isIOS = "ios" == e.platform, console.log("***********More Game Banner Create************");
                try {
                    this._moreGameBanner = window.tt.createMoreGamesBanner({
                        style: {
                            left: 20,
                            top: 40,
                            width: 150,
                            height: 40
                        },
                        appLaunchOptions: [{
                            appId: "tta230d48d3d0ac553",
                            query: "id=1",
                            extraData: {}
                        }, {
                            appId: "tt04b7720a9b8d609e",
                            query: "id=1",
                            extraData: {}
                        }, {
                            appId: "ttb7e2c15f28d861ac",
                            query: "id=10",
                            extraData: {}
                        }, {
                            appId: "ttea169cab752c1529",
                            query: "id=1",
                            extraData: {}
                        }, {
                            appId: "tt6d551be8f26f92b2",
                            query: "id=1",
                            extraData: {}
                        }, {
                            appId: "tt9d44ebf9027e62a6",
                            query: "id=1",
                            extraData: {}
                        }]
                    }), this._moreGameBanner.onResize(i => {
                        t._moreGameBanner.style.top = e.windowHeight - i.height, t._moreGameBanner.style
                            .left = (e.windowWidth - i.width) / 2, console.log(
                                "onResize showMoreGameBanner:", t._moreGameBanner)
                    })
                } catch (t) {
                    console.log("initMoreGameBanner:", t)
                }
            }
        }
        copy(t) {
            window.tt && window.tt.setClipboardData({
                data: t,
                success(t) {
                    console.log("Setclipboarddata Called Successfully")
                },
                fail(t) {
                    console.log("Setclipboarddata Call Failed")
                }
            })
        }
        initAudioContext() {
            window.tt && (this._audioContext = window.tt.createInnerAudioContext(), this._audioContext.loop = !0,
                this._audioContext.obeyMuteSwitch = !0)
        }
        playMusic(t) {
            window.tt && (this._audioContext.src = t, this._audioContext.play())
        }
        stopMusic() {
            window.tt && this._audioContext.stop()
        }
        playBgm2(t) {
            window.tt && (this._bgm2 || (this._bgm2 = window.tt.createInnerAudioContext(), this._bgm2.loop = !0,
                this._bgm2.obeyMuteSwitch = !0, this._audioContext.src = t), this._audioContext.play())
        }
        stopBgm2() {
            window.tt && this._bgm2 && (this._bgm2.stop(), this._bgm2 = null)
        }
        showBanner() {
            this._banner && this._banner.show()
        }
        hideBanner() {
            this._banner && this._banner.hide()
        }
        showMoreGameBanner() {
            this._moreGameBanner && this._moreGameBanner.show()
        }
        hideMoreGameBanner() {
            this._moreGameBanner && this._moreGameBanner.hide()
        }
        initVideo() {
            var t = this;
            window.tt && window.tt.createRewardedVideoAd && (this._video = window.tt.createRewardedVideoAd({
                adUnitId: t._videoid
            }), this._video.onLoad(function() {
                console.log("*******Video Pulled Successfully**********"), t._isVideoReady = !0
            }), this._video.onError(function(e) {
                t._isVideoReady = !1, console.log("*******Video Pull Error**********"), Laya.MouseManager
                    .enabled = !0
            }))
        }
        showVideo(t) {
            var e = this;
            Ot.Instance.playVideo(e._videoid, t)
        }
        navigateToVideoView(t) {
            window.tt.navigateToVideoView({
                videoId: t,
                success: t => {
                    console.log("skip videoId success")
                },
                fail: t => {
                    1006 === t.errCode && console.log("something wrong with your network")
                }
            })
        }
        getVideoLikeInfo(t) {
            window.tt.request({
                url: "",
                method: "POST",
                data: {
                    alias_ids: [t]
                },
                success: t => {}
            })
        }
        isVideoReady() {
            return this._isVideoReady
        }
        getRandomAdObj() {
            if (!this._navigateAppList || 0 == this._navigateAppList.length) return null;
            return r.randomArray(this._navigateAppList)
        }
        initRecoder() {
            if (window.tt) {
                var t = this;
                this._recoder = window.tt.getGameRecorderManager(), this._recoder.onStart(function() {
                    t._recodreVideoPath = null, console.log("Screen Recording Starts")
                }), this._recoder.onStop(function(e) {
                    t._recodreVideoPath = e.videoPath, console.log("End Of Screen Recording"), console.log(e)
                })
            }
        }
        startRecord() {
            window.tt && (this._isStarRecord = !0, this._recordTime = Kt.now, this._recodStartTimeStamp = (new Date)
                .getTime(), this._recoder.start({
                    duration: 120
                }))
        }
        pauseRecord() {
            window.tt && this._recoder.pause()
        }
        remuseRecord() {
            window.tt && this._recoder.resume()
        }
        stopRecord() {
            window.tt && (this._recordTime = 0, this._isStarRecord = !1, this._recodTime = ((new Date).getTime() -
                this._recodStartTimeStamp) / 1e3, this._recoder.stop())
        }
        getRecordTime() {
            return Math.floor((Kt.now - this._recordTime) / 1e3)
        }
        canShareRecord() {
            return this._recordTime > 0 && Kt.now - this._recordTime > 5e3
        }
        shareRecord(t) {
            if (!window.tt) return t && t(!1);
            if (null != this._recodreVideoPath) {
                var e = this._shareTitle[Math.floor(Math.random() * this._shareTitle.length)];
                window.tt.shareAppMessage({
                    channel: "video",
                    title: e,
                    desc: this._shareDes[Math.floor(Math.random() * this._shareDes.length)],
                    imageUrl: "",
                    templateId: this._shareid[Math.floor(Math.random() * this._shareid.length)],
                    query: "",
                    extra: {
                        videoPath: this._recodreVideoPath,
                        videoTopics: this._shareVideoTopic,
                        hashtag_list: this._shareVideoTopic,
                        video_title: e
                    },
                    success(e) {
                        console.log("Share Video Successfully videoId:", e.videoId), t && t(!0)
                    },
                    fail(e) {
                        console.log("Failed To Share Video 22222", e);
                        let i = e && e.errMsg && e.errMsg.indexOf("short") >= 0;
                        t && t(!1, i)
                    }
                })
            }
        }
        showToast(t) {}
        showFavorateGuide() {
            window.tt && window.tt.showFavoriteGuide && window.tt.showFavoriteGuide({
                type: "bar",
                content: "One-Click Add To My Applet",
                position: "bottom",
                success(t) {
                    console.log("Successful Display Of Boot Components")
                },
                fail(t) {
                    console.log("Boot Component Display Failed")
                }
            })
        }
        vibrateShort() {
            window.tt && window.tt.vibrateShort({
                success(t) {},
                fail(t) {}
            })
        }
        vibrateLong() {
            window.tt && window.tt.vibrateLong({
                success(t) {},
                fail(t) {}
            })
        }
        isShoucangEnter() {
            return !!window.adsMgr && window.adsMgr._addDeskFlag
        }
        saveUserGameData(t, i, s = !1) {
            if (s) return Ft.updateSave({
                isClear: !0
            }), void console.log("~~~~~~~~~~~~~Clear File Successfully~~~~~~~~~~~~~~~~~~");
            t && (this._userGameData = t, i && window.tt && (this._userGameData.checkSave = [e.Local_SkinUnlock, e
                .Local_Level, e.Local_FishingMesh
            ], Ft.updateSave(this._userGameData), console.log(
                "save+++ server GameData ------------------------\x3e", this._userGameData)))
        }
        userGameData(t = !1) {
            return this._userGameData
        }
        setUserGameData(t) {
            let e = this;
            if (t && !Pt.Instance.isLogin) {
                Pt.Instance.isLogin = !0, e._userGameData = t;
                for (let t in e._userGameData) {
                    let i = e._userGameData[t];
                    if (e._userGameData[t] && (e._userGameData[t] instanceof Array || e._userGameData[
                            t] instanceof Object)) try {
                        i = JSON.stringify(e._userGameData[t])
                    } catch (i) {
                        console.error("JSON.parse:", e._userGameData[t])
                    }
                    Pt.Instance.setLocalStorageData(t, i)
                }
            }
            return this._userGameData
        }
    }
    Ht._Ins = null;
    class Kt {
        static getAngle(t, e, i, s) {
            return Math.atan2(t - e, i - s)
        }
        static angleChangeRadian(t) {
            return t / 180 * Math.PI
        }
        static radianChangeAngle(t) {
            return t * (180 / Math.PI)
        }
        static get now() {
            let t = Ht.Ins._serverDec;
            return Laya.Browser.now() + t
        }
        static findChildByName(t, e) {
            if (t.name == e) return t;
            let i = null;
            for (let s = 0, n = t.numChildren; s < n; s++)
                if (i = this.findChildByName(t.getChildAt(s), e)) return i;
            return null
        }
        static isToday(t, e = 0) {
            e = e || Kt.now;
            let i = new Date(t),
                s = new Date(e);
            return i.getFullYear() == s.getFullYear() && i.getMonth() == s.getMonth() && i.getDate() == s.getDate()
        }
        static getTimeStr(t) {
            return Math.floor(t / 6e4 * 10) / 10 + "Minute"
        }
        static getTimeStr1(t) {
            let e = "",
                i = Math.floor(t / 36e5);
            i < 10 && (e += "0"), e += i + "???";
            let s = t % 36e5,
                n = Math.floor(s / 6e4);
            return n < 10 && (e += "0"), e += n + "???", s %= 6e4, (s = Math.floor(s / 1e3)) < 10 && (e += "0"), e +=
                s
        }
        static getStorageInfoData(t, e = "string", i) {
            var s = Laya.LocalStorage.getItem(t);
            if ("number" == e) return !s || isNaN(Number(s)) || null == s ? i : Number(s);
            if ("array" == e) return s && s instanceof Array ? (console.log("Is Array Data 1"), s) : s && JSON.parse(s) ? (
                console.log("Array Data To Be Converted 1"), JSON.parse(s)) : (console.log("Return Array Default Data 1"), i);
            if ("object" == e) {
                let e = i;
                try {
                    e = s && JSON.parse(s)
                } catch (n) {
                    console.error("getStorageInfoData++++++++++++++++++++++object", t, s), e = i
                }
                return e
            }
            return s
        }
        static setStorageInfoData(t, e, i = !0) {
            Laya.LocalStorage.setItem(t, e + "")
        }
        static createGrayFilter() {
            return new Laya.ColorFilter([.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0,
                0, 0, 0, 0, 1, 0
            ])
        }
    }
    class Yt {
        static bulletUrl(t) {
            return Yt.isServerBullet(t) ? Yt.BULLET_BASE_URL0 + t + ".lh" : Yt.BULLET_BASE_URL + t + ".lh"
        }
        static isServerBullet(t) {
            return t >= e.TASK_MIFENG || t < e.BLUE_BINGSHUANG_SKIN
        }
        static getLevelPrefabURL(t) {
            return t <= e.TOTAL_LEVEL ? t = (t - 1) % e.TOTAL_LEVEL + 1 : (t = (t - e.TOTAL_LEVEL - 1) % 20 + 1,
                    t += 15), window.qg ? e.cacheURL + Yt.LEVEL_BASE_URL1 + "Level_" + t + ".lh" : Yt
                .LEVEL_BASE_URL + "Level_" + t + ".lh"
        }
        static isHai(t) {
            return t <= e.TOTAL_LEVEL ? t = (t - 1) % e.TOTAL_LEVEL + 1 : (t = (t - e.TOTAL_LEVEL - 1) % 20 + 1,
                t += 15), t >= 31 && t <= 35
        }
        static qiulongURL() {
            let t = window.qg ? e.cacheURL + "THSS_RES_172/" + Yt.qiulong_URL : "res/3dScene/" + Yt.qiulong_URL;
            return Pt.Instance.useSkinId == e.TASK_LEISHENGCHUI ? t = Yt.SkillChuiZiURL() : Pt.Instance.useSkinId ==
                e.TASK_BINGFAZHANG ? t = Yt.SkillBingURL() : Pt.Instance.useSkinId == e.TASK_GUITAR && (t = Yt
                    .SkillGuiterURL()), t
        }
        static GirlURL() {
            return window.qg ? e.cacheURL + Yt.GIRL_XIQI_TT : Yt.GIRL_XIQI
        }
        static jiayuanSceneURL() {
            return window.qg ? e.cacheURL + Yt.Jiayuan_SCENE_TT : Yt.Jiayuan_SCENE
        }
        static fishingSceneURL() {
            return window.qg ? e.cacheURL + Yt.FISHING_SCENE_TT : Yt.FISHING_SCENE
        }
        static yuganURL() {
            return window.qg ? e.cacheURL + Yt.yugan_URL_TT : Yt.yugan_URL
        }
        static floatURL() {
            return window.qg ? e.cacheURL + Yt.float_URL_TT : Yt.float_URL
        }
        static fishURL() {
            return window.qg ? e.cacheURL + Yt.fish_URL_TT : Yt.fish_URL
        }
        static fishMeshURL(t) {
            let i = (t < 10 ? "0" + t : t) + ".lh";
            return window.qg ? e.cacheURL + Yt.Fish_Mesh_URL_TT + i : Yt.Fish_Mesh_URL + i
        }
        static LineURL() {
            return window.qg ? e.cacheURL + Yt.Fish_Line_URL_TT : Yt.Fish_Line_URL
        }
        static fguiURL(t) {
            return window.qg ? e.cacheURL + "THSS_RES_172/" + t : "res/" + t
        }
        static SceneGameURL(t) {
            let i = "";
            switch (t) {
                case 1:
                    i = Yt.GAME_SCENE1;
                    break;
                case 2:
                    let s = new Date(Kt.now).getHours();
                    i = s >= 19 || s <= 6 ? Yt.GAME_SCENE2_night : Yt.GAME_SCENE2;
                    break;
                case 3:
                    i = Yt.GAME_SCENE3;
                    break;
                case 4:
                    i = window.qg ? e.cacheURL + Yt.GAME_SCENE4_TT : Yt.GAME_SCENE4
            }
            return i
        }
        static getRangHitUrl() {
            return Pt.Instance.useSkinId == e.TASK_LEISHENGCHUI ? Yt.RangHitLelUrl() : Pt.Instance.useSkinId == e
                .TASK_BINGFAZHANG ? Yt.RangHitBingUrl() : Pt.Instance.useSkinId == e.TASK_GUITAR ? Yt
                .RangHitGuiterUrl() : Pt.Instance.useSkinId == e.TASK_SHIT ? Yt.RangHitShitlUrl() : Yt.Hit
        }
        static RangHitBingUrl() {
            return window.qg ? e.cacheURL + "THSS_RES_172/" + Yt.RangeHit_Bing : "res/3dScene/" + Yt.RangeHit_Bing
        }
        static RangHitLelUrl() {
            return window.qg ? e.cacheURL + "THSS_RES_172/" + Yt.RangeHit_Lei : "res/3dScene/" + Yt.RangeHit_Lei
        }
        static RangHitGuiterUrl() {
            return window.qg ? e.cacheURL + "THSS_RES_172/" + Yt.RangeHit_Guiter : "res/3dScene/" + Yt
                .RangeHit_Guiter
        }
        static RangHitShitlUrl() {
            return window.qg ? e.cacheURL + "THSS_RES_172/" + Yt.RangeHit_Shit : "res/3dScene/" + Yt.RangeHit_Shit
        }
        static SkillChuiZiURL() {
            return window.qg ? e.cacheURL + "THSS_RES_172/" + Yt.Skill_ChuiZi : "res/3dScene/" + Yt.Skill_ChuiZi
        }
        static SkillBingURL() {
            return window.qg ? e.cacheURL + "THSS_RES_172/" + Yt.Skill_Bing : "res/3dScene/" + Yt.Skill_Bing
        }
        static SkillGuiterURL() {
            return window.qg ? e.cacheURL + "THSS_RES_172/" + Yt.Skill_Guitere : "res/3dScene/" + Yt.Skill_Guitere
        }
    }
    Yt.Hit = "res/3dScene/LayaScene_Prefabs/Conventional/BulletHitFX.lh", Yt.FIRE_BULLET =
        "res/3dScene/LayaScene_Prefabs/Conventional/Fire_FX.lh", Yt.FIRE_HJT =
        "res/3dScene/LayaScene_Prefabs/Conventional/Fire_HJT_FX.lh", Yt.BULLET_BASE_URL0 =
        "res/3dScene/LayaScene_THSS_Bullet_Res/Conventional/Bullet_", Yt.BULLET_BASE_URL1 =
        "res/LayaScene_THSS_Bullet_Res/Conventional/Bullet_", Yt.BULLET_BASE_URL =
        "res/3dScene/LayaScene_Prefabs/Conventional/Bullet_", Yt.GAME_SCENE1 =
        "res/3dScene/LayaScene_Scene_Game1/Conventional/Scene_Game1.ls", Yt.GAME_SCENE2 =
        "res/3dScene/LayaScene_Scene_Game2/Conventional/Scene_Game2.ls", Yt.GAME_SCENE2_night =
        "res/3dScene/LayaScene_Scene_Game2/Conventional/Scene_Game2_night.ls", Yt.GAME_SCENE3 =
        "res/3dScene/LayaScene_Scene_Game3/Conventional/Scene_Game3.ls", Yt.GAME_SCENE4 =
        "res/3dScene/LayaScene_Scene_Game4/Conventional/Scene_Game4.ls", Yt.GAME_SCENE4_TT =
        "THSS_RES_172/LayaScene_Scene_Game4/Conventional/Scene_Game4.ls", Yt.SHOP =
        "res/3dScene/LayaScene_Scene_Shop/Conventional/Scene_Shop.ls", Yt.JLS_URL_A =
        "res/3dScene/LayaScene_Prefabs/Conventional/JLS.lh", Yt.JLS_URL_B =
        "res/3dScene/LayaScene_Prefabs/Conventional/JLS_B.lh", Yt.FX_jiashu_URL =
        "res/3dScene/LayaScene_Prefabs/Conventional/FX_jiashu.lh", Yt.LEVEL_BASE_URL1 =
        "THSS_RES_172/LayaScene_Scene_Level/Conventional/", Yt.LEVEL_BASE_URL =
        "res/3dScene/LayaScene_Scene_Level/Conventional/", Yt.YingZi =
        "res/3dScene/LayaScene_Prefabs/Conventional/YingZi.lh", Yt.EQIUP_ENEMY =
        "res/3dScene/LayaScene_PlayerPrefabs/Conventional/eqiupEnemy.lh", Yt.ENEMY =
        "res/3dScene/LayaScene_PlayerPrefabs/Conventional/enemy.lh", Yt.CIVILIAN =
        "res/3dScene/LayaScene_PlayerPrefabs/Conventional/civilian.lh", Yt.PLAYER_new =
        "res/3dScene/LayaScene_PlayerPrefabs/Conventional/Player_new.lh", Yt.BOSS =
        "res/3dScene/LayaScene_PlayerPrefabs/Conventional/boss.lh", Yt.GIRL_XIQI =
        "res/3dScene/LayaScene_THSS_Bullet_Res/Conventional/7x_girl.lh", Yt.GIRL_XIQI_TT =
        "THSS_RES_172/LayaScene_THSS_Bullet_Res/Conventional/7x_girl.lh", Yt.DOOR =
        "res/3dScene/LayaScene_Prefabs/Conventional/door.lh", Yt.Jiayuan_SCENE =
        "res/3dScene/LayaScene_Scene_jiayuan/Conventional/Scene_jiayuan.ls", Yt.Jiayuan_SCENE_TT =
        "THSS_RES_172/LayaScene_Scene_jiayuan/Conventional/Scene_jiayuan.ls", Yt.FISHING_SCENE =
        "res/3dScene/LayaScene_Scene_diaoyu/Conventional/Scene_diaoyu.ls", Yt.FISHING_SCENE_TT =
        "THSS_RES_172/LayaScene_Scene_diaoyu/Conventional/Scene_diaoyu.ls", Yt.yugan_URL =
        "res/3dScene/LayaScene_THSS_Fishing_Res/Conventional/yugan.lh", Yt.yugan_URL_TT =
        "THSS_RES_172/LayaScene_THSS_Fishing_Res/Conventional/yugan.lh", Yt.float_URL =
        "res/3dScene/LayaScene_THSS_Fishing_Res/Conventional/float.lh", Yt.float_URL_TT =
        "THSS_RES_172/LayaScene_THSS_Fishing_Res/Conventional/float.lh", Yt.fish_URL =
        "res/3dScene/LayaScene_THSS_Fishing_Res/Conventional/fish.lh", Yt.fish_URL_TT =
        "THSS_RES_172/LayaScene_THSS_Fishing_Res/Conventional/fish.lh", Yt.Fish_Mesh_URL =
        "res/3dScene/LayaScene_THSS_Fishing_Res/Conventional/fish_mesh_", Yt.Fish_Mesh_URL_TT =
        "THSS_RES_172/LayaScene_THSS_Fishing_Res/Conventional/fish_mesh_", Yt.Fish_Line_URL =
        "res/3dScene/LayaScene_THSS_Fishing_Res/Conventional/Line.lh", Yt.Fish_Line_URL_TT =
        "THSS_RES_172/LayaScene_THSS_Fishing_Res/Conventional/Line.lh", Yt.qiulong_URL =
        "LayaScene_Z_Particle/Conventional/qiulong.lh", Yt.RangeHit_Lei =
        "LayaScene_Z_Particle/Conventional/Thunder_hit_skill.lh", Yt.RangeHit_Bing =
        "LayaScene_Z_Particle/Conventional/FX_IceCube_skill.lh", Yt.RangeHit_Guiter =
        "LayaScene_Z_Particle/Conventional/FX_muisc_hit.lh", Yt.RangeHit_Shit =
        "LayaScene_Z_Particle/Conventional/FX_bianbian_hit.lh", Yt.Skill_ChuiZi =
        "LayaScene_Z_Particle/Conventional/FX_Thunder_skill.lh", Yt.Skill_Bing =
        "LayaScene_Z_Particle/Conventional/FX_snow_skill.lh", Yt.Skill_Guitere =
        "LayaScene_Z_Particle/Conventional/FX_Guitar_skill.lh", Yt.isLoadServerBullet = !1, Yt.isLoadServerScene = !1;
    class qt {
        constructor() {
            this._isLoaded = !1, this._start3d = !1, this._load3dStartValue = 0, this._load3dBarValue = 0, this
                ._initFinish = !1, this._tipsList = [], this._lastTime = 0, this._isLoaded = !1, this.statComplete =
                0, this._tipsList = ["The Target On The Big Boss Is His Weakness!", "If The Enemy Runs Too Fast, Try Using Skills To Control Them!", "Some Easter Eggs Require Specific Weapons To Be Triggered",
                    "If The Level Is Missed, It Will Appear After Playing A Few More Levels!", "Quickly Double-Tap The Screen Twice To Speed Up The Flight, Most People Do Not Tell Him"
                ]
        }
        static get Instance() {
            return null == qt._instance && (qt._instance = new qt), qt._instance
        }
        start() {
            Laya.loader.load([{
                url: e.FGUI_URL_TXT_LOADING,
                type: Laya.Loader.BUFFER
            }, {
                url: e.FGUI_URL_LOADING_ATLAS0,
                type: Laya.Loader.IMAGE
            }], Laya.Handler.create(this, this.onLoadingResComplete))
        }
        onLoadingResComplete() {
            fgui.UIPackage.addPackage(e.FGUI_URL_LOADING), this._loadingUI = fgui.UIPackage.createObject(e
                    .FGUI_URL_LOADING_NAME, "loadingUIWin").asCom, this._bar = this._loadingUI.getChild("bar")
                .asProgress, this._bar.value = 0, fgui.GRoot.inst.addChild(this._loadingUI), Laya.stage.addChild(
                    fgui.GRoot.inst.displayObject), Laya.stage.on(Laya.Event.RESIZE, this, this.onResize), this
                .onResize(), this.showTips(), window.qg || (Yt.isLoadServerBullet = !0), window.qg || (Yt
                    .isLoadServerScene = !0), this.statComplete = .5, this.updateProgress(), this.loadFguiRes()
        }
        onResize() {
            this._loadingUI.getChild("n8").height = Laya.stage.height, this._loadingUI.getChild("n8").width = Laya
                .stage.width, this._loadingUI.width = Laya.stage.width, this._loadingUI.height = Laya.stage.height,
                this._loadingUI.getChild("n13").text = "1.0.0"
        }
        refreshProgress() {}
        updateProgress() {
            this.statComplete > 1 && (this.statComplete = 1);
            let t = 100 * this.statComplete;
            this._bar.value = t, this._isLoaded && this.LoadResourcesEnd(), !this._isLoaded && this.statComplete >=
                1 && (this.statComplete = 0)
        }
        showTips() {
            let t = r.randomArray(this._tipsList);
            this._loadingUI.getChild("n12").text = "" + t, Laya.timer.once(2e3, this, this.showTips)
        }
        loadFguiRes() {
            this._time = Kt.now, Laya.loader.load([{
                url: e.FGUI_URL_MAIN_TXT1,
                type: Laya.Loader.BUFFER
            }, {
                url: e.FGUI_PACKAGE1_ATLAS0,
                type: Laya.Loader.IMAGE
            }, {
                url: e.FGUI_PACKAGE1_ATLAS1,
                type: Laya.Loader.IMAGE
            }, {
                url: e.FGUI_PACKAGE1_ATLAS2,
                type: Laya.Loader.IMAGE
            }, {
                url: e.FGUI_PACKAGE1_ATLAS3,
                type: Laya.Loader.IMAGE
            }], Laya.Handler.create(this, this.load3DRes)), e.isDebug && fgui.UIPackage.loadPackage(e
                .FGUI_URL_DEBUG, Laya.Handler.create(this, () => {
                    console.log("debug loaded")
                }))
        }
        load3DRes() {
            let t = Kt.now;
            console.log("load fgui costTime:", t - this._time), this._time = t, this._start3d = !0, this
                ._load3dStartValue = this.statComplete, this._load3dBarValue = 1 - this._load3dStartValue - .1, this
                ._load3dBarValue = Math.max(0, this._load3dBarValue);
            let e = [];
            e = [Yt.Hit, Yt.FIRE_BULLET, Yt.FIRE_HJT, Yt.FX_jiashu_URL, Yt.YingZi, Yt.PLAYER_new, Yt.ENEMY, Yt
                .EQIUP_ENEMY, Yt.BOSS, Yt.CIVILIAN
            ], Laya.loader.create(e, Laya.Handler.create(this, () => {
                this.loadLevelRes()
            }))
        }
        loadLevelZip() {
            window.qg ? c.Instance.checkCache(this.loadLevelRes.bind(this), "LayaScene_Scene_Level.zip") : this
                .loadLevelRes()
        }
        loadLevelRes() {
            let t = Kt.now;
            console.log("load load3DRes costTime:", t - this._time), this._time = t, console.log(
                "GameDataMgr.Instance.init -------time:", Kt.now);
            let i = Yt.getLevelPrefabURL(Pt.Instance.level),
                s = "",
                n = Pt.Instance.useSkinId;
            (!window.qg || n < e.TASK_MIFENG && n >= e.BLUE_BINGSHUANG_SKIN) && (s = Yt.bulletUrl(Pt.Instance
                .useSkinId));
            let a = [i];
            "" != s && a.push(s), Laya.loader.create(a, Laya.Handler.create(this, () => {
                this.checkHai()
            }))
        }
        checkHai() {
            let t = Kt.now;
            console.log("load loadLevelRes costTime:", t - this._time), this._time = t, window.qg && Yt.isHai(Pt
                .Instance.level) ? c.Instance.checkCache(this.loadedServerScene.bind(this),
                "LayaScene_Scene_Game4.zip") : this.loadOtherResources()
        }
        loadedServerScene() {
            Yt.isLoadServerScene = !0, this.loadOtherResources()
        }
        loadOtherResources() {
            D.Instance.loadScene3d(Pt.Instance.level, () => {
                let t = Kt.now;
                console.log("load loadOtherResources costTime:", t - this._time), this._time = t, this
                    ._start3d = !1, this._isLoaded = !0, this.statComplete = 1, this.updateProgress()
            })
        }
        load3dResProgress(t) {}
        LoadResourcesEnd() {
            this._initFinish || (this._initFinish = !0, Mt.Instance.init(), D.Instance.init(), Gt.Instance.init())
        }
        stop() {
            let t = Kt.now;
            console.log("enter Game costTime:", t - this._time), this._time = t, qt._instance = null, Laya.timer
                .clear(this, this.refreshProgress), Laya.stage.off(Laya.Event.RESIZE, this, this.onResize), this
                ._loadingUI.visible = !1, Laya.timer.clearAll(this), this._loadingUI.removeFromParent(), this
                ._loadingUI.dispose(), fgui.UIPackage.removePackage(e.FGUI_URL_LOADING_NAME), Laya.loader.clearRes(e
                    .FGUI_URL_TXT_LOADING), Laya.loader.clearRes(e.FGUI_URL_LOADING_ATLAS0)
        }
    }
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(t.width, t.height) : Laya.init(t.width, t.height, Laya.WebGL), Laya
                .Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), Laya.stage
                .scaleMode = t.scaleMode, Laya.stage.screenMode = t.screenMode, Laya.stage.alignV = t.alignV, Laya
                .stage.alignH = t.alignH, Laya.stage.on(Laya.Event.RESIZE, this, () => {
                    e.isIpad && (Laya.stage.scaleMode = "showall", Laya.stage.screenMode = "none", Laya.stage
                        .alignV = "middle", Laya.stage.alignH = "center"), Laya.stage.offAll(Laya.Event
                        .RESIZE)
                }), Laya.URL.exportSceneToJson = t.exportSceneToJson, (t.debug || "true" == Laya.Utils
                    .getQueryString("debug")) && Laya.enableDebugPanel(), t.physicsDebug && Laya.PhysicsDebugDraw &&
                Laya.PhysicsDebugDraw.enable(), t.stat && Laya.Stat.show(), Laya.alertGlobalError = !0, Pt.Instance
                .init(), fgui.UIConfig.packageFileExtension = "txt", Laya.ResourceVersion.enable("version.json",
                    Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION)
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
        }
        onConfigLoaded() {
            t.startScene && Laya.Scene.open(t.startScene), qt.Instance.start(), this.init4399Ad()
        }
        init4399Ad() {
            window.adsMgr = {
                _isShowing: 0,
                _time: 0,
                showVideoAd(t) {
                    let e = t.success,
                        i = t.fail;
                    window.adsMgr.getTime() - window.adsMgr._time < 2e3 ? _.show("Your speed was too fast!") : window.adsMgr
                        ._isShowing ? _.show("Your speed was too fast!") : window.h5api.canPlayAd(function(t) {
                            t.canPlayAd ? window.h5api.playAd(function(t) {
                                1e4 === t.code ? (console.log("Start playing"), Laya.SoundManager
                                    .setMusicVolume(0), Laya.SoundManager.setSoundVolume(0),
                                    window.adsMgr._isShowing = !0, window.adsMgr._time = window
                                    .adsMgr.getTime()) : 10001 === t.code ? (console.log(
                                    "End Of Play"), Laya.SoundManager.setMusicVolume(1), Laya
                                    .SoundManager.setSoundVolume(1), e && e(!0), i = e = null,
                                    window.adsMgr._isShowing = !1) : (i && i(i), Laya
                                    .SoundManager.setMusicVolume(1), Laya.SoundManager
                                    .setSoundVolume(1), console.log("Advertising exception"), i = e = null,
                                    window.adsMgr._isShowing = !1)
                            }) : (i && i(i), i = e = null, window.adsMgr._isShowing = !1, _.show(
                                "Ads've been used up, come back tomorrow"))
                        })
                },
                canPlayVideo() {
                    window.h5api.canPlayAd(function(t) {
                        return !!t.canPlayAd
                    })
                },
                showInsertAd() {},
                showBanner() {},
                hideBanner() {},
                showMoreGame() {
                    window.h5api.showRecommend()
                },
                getTime: () => (new Date).getTime()
            }
        }
    }
}();