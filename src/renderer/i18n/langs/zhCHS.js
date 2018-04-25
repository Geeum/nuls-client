import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
const cn = {
    message: {
        //public
        accountManagement: '账户管理',
        walletManagement: '钱包',
        accountAssetsManagement:'账户资产',
        transactionManagement: '交易管理',
        consensusManagement:'共识',
        setManagement:'设置',
        all: '全部',
        miningFee: '手续费：0.01 NULS',
        remarks: '备注',
        addressNull: '请选择账户地址！',
        transferNull: '请输入转账地址！',
        addressOrTransfer: '转账地址不能是账户地址！',
        transferNO: '请输入转账金额！',
        transferNO1: '请输入正确的转账金额为数字值！',
        transferNO2: '转账金额不能大于可用余额！',
        transferNO3:'转账金额不能小于0.01 NULS！',
        creditLow: '对不起，您选择的账户余额不足！',
        //input password
        passWordTitle: '请输入密码',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        passWordSuccess: '恭喜您，申请成功！',
        passWordFailed: '对不起，申请失败！',
        passWordWasincorrect: '您的密码不正确',
        enterCance: '取消输入',
        //topNav
        home: '首页',
        wallet: '钱包',
        consensus: '共识',
        applications: '应用',
        more: '更多',
        news: '消息',
        //home
        fund: '我的资产',
        fundTotal: '总额',
        fundUsable: '可用',
        fundLock: '冻结',
        consensus1: '全网共识',
        pledge: '委托总额',
        income: '矿金收入',
        annualYield: '节点总数',
        applicationsNode: '共识节点',
        //set password
        set: '设置',
        oldPassWord: '旧密码',
        setPassWord: '设置密码',
        walletPassWord: '钱包密码（8-20位字符,需包含字母和数字）',
        walletPassWord1:'8-20位字符,需包含字母和数字',
        affirmWalletPassWord: '确认钱包密码',
        passWordHint: '密码提示(可选)',
        passWordInfo: '请认真保存当前钱包密码，若钱包密码丢失，很可能导致您的资产丢失！',
        passWordHintEmpty: '密码提示不能为空!',
        walletPassWordEmpty: '钱包密码（8-20位字符,需包含字母和数字）',
        affirmWalletPassWordEmpty: '请再次输入密码。',
        passWordAtypism: '两次输入密码不一致!',
        passWordAffirm: '确定',
        passWordCancel: '我确认钱包风险，暂不设置密码',
        passWordCuo:'密码错误',

        //first info
        firstInfoTitle: '创建或导入账户',
        createNewAccount: '创建账户',
        createNewAccountInfo: '您可以创建一个全新的账户',
        importAccount: '导入账户',
        importAccountInfo: '您可以导入原账户文件，支持明文私钥和二维码图片',
        //new account
        newAccountTitle: '恭喜！您已成功创建账户，请立即备份！',
        newAccountAddress: '地址',
        Address: '地址',
        newAccountKey: '私钥',
        newAccountBackupsKey: '明文私钥备份',
        newAccountBackupsKeyInfo: '点击将下载.txt文件，文件中记录了您的明文私玥，请保存到安全的地方！',
        newAccountBackupsCode: '二维码备份',
        newAccountBackupsCodeInfo: '点击将下载二维码图片，请保存到安全的地方!',
        newAccountBackupsNuls: '.nuls格式备份',
        newAccountBackupsNulsInfo: '点击将下载.nuls文件，请保存到安全的地方!',
        newAccountSubmit: '完成备份',
        newAccountReset: '确认风险，以后备份',
        //wallet index
        indexAccountAddress: '账户地址',
        indexAccountHome: '账户资产',
        indexProperty: '资产',
        indexSum: '总数',
        indexUsable: '可用',
        indexLock: '冻结',
        operation: '操作',
        transfer: '转账',
        confirmed: '已确认',
        confirming: '确认中',
        rollOut: '转出',
        rollIn: '转入',
        download: '下载子链',
        transactionRecord: '交易记录',
        transactionType: '交易类型',
        //转账
        recorded: '入账',
        assetChange: '资产变动',
        state: '状态',
        time: '时间',
        //transfer
        sourceAddress:'转出地址',
        destinationAddress: '收款地址',
        transferAmount: '转账金额',
        currentBalance: '可用余额',
        select: '选择',
        //freezeList
        freezeList: '冻结列表',
        type: '类型',
        amount: '金额',
        freezeTime: '创建时间',
        thawingTime: '解冻',
        //userInfo
        userInfoTitle: '账户管理',
        tabName: '账户',
        tabAlias: '别名',
        tabRemove: '移除',
        tabBackups: '备份',
        //inportAccount
        inportAccount: '导入账户',
        key: '明文私钥导入',
        keyLow: '请输入明文私钥',
        code: '二维码导入',
        codeLow: '请选择您备份的二维码图片即可导入',
        //dealInfo
        input: '输入',
        output: '输出',
        overview: '概览',
        tradingTime: '交易时间',
        miningFee1:'手续费',
        autograph: 'txid',
        transactionState: '交易状态',
        blockHeight: '区块高度',

        //consensus
        c1:'总委托金额',
        c1_1:'（全网）',
        c2:'总共识数',
        c3:'我的总体情况',
        c4:'创建节点',
        c5:'创建',
        //currentBalance: '可用余额',
        c6:'可用余额',
        c7:'累计收益',
        c8:'委托节点',
        //pledge: '委托',
        c9:'委托',
        c10:'委托总额',
        c11:'全部共识',
        c12:'我的共识',
        statusundefined:'',
        status0:'未参共识',
        status1:'等待共识',
        status2:'正在共识',

        c16:'节点来源',
        c17:'佣金比例',
        c18:'信用值',
        c19:'参与人数',
        c20:'委托金额',
        //newNode
        c21:'自建节点共识',
        c22:'共识账户',
        c23:'出块地址',
        c24:'节点名称',
        c25:'保证金',
        c26:'代理佣金比例',
        c27:'节点介绍',
        c28:'手续费',
        c29:'确定',
        c30:'个',
        c31:'请输入保证金额！',
        c32:'保证金：为数字值,小数点前、后最多八位',
        c33:'保证金额不能大于可用余额！',
        c34:'保证金额必须大于20000！',
        c35:'请输入节点佣金比例！',
        c36:'佣金比例：为数字值，小数点前、后最多二位',
        c37:'节点佣金比例为：0-20！',
        c38:'请输入出块地址！',
        c39:'请输入节点名称！',
        c40:'请输入节点备注！',
        c41:'请输入节点名称不能大于50个字节',
        //agencyNode
        c43:'共识代理节点',
        c44:'请输入别名或地址',
        c45:'搜索',
        c46:'请选择排序方式',
        c47:'剩余可委托',
        //pledgeInfo
        c48:'我的委托总额明细',
        c49:'加入时间',
        c50:'查看',
        //addNode
        c51:'委托保证金',
        c52:'请输入委托保证金额！',
        c53:'请输入正确的委托保证金额为数字值',
        c54:'保证金额必须大于2000、小于可用余额',
        c541:'保证金：不低于20000、小于可用余额',
        //allPledge
        c55:'委托总额明细',
        //myNode
        c56:'我的委托明细',
        c57:'追加',
        c58:'退出',
        c59:'已取消',
        c60:'确定退出',
        c61:'退出节点',
        //nodeInfo
        c62:'关闭节点',
        c63:'请输入搜索关键字！',
        c64:'剩余可委托',
        c65:'我们的工程师正专注研发，更多出色功能敬请期待！',
        //setPage
        c66:'系统设置',
        c67:'开机启动',
        c68:'消息提示',
        c69:'账户',
        c70:'共识',
        c71:'账本',
        c72:'网络',
        c73:'日志',
        c74:'查看日志',
        c75:'语言选择',
        c76:'请选择',
        c77:'通讯录管理',
        c78:'查看通讯录',
        c79:'钱包密码管理',
        c80:'修改密码',
        c81:'当前版本',
        c82:'更新版本',
        c83:'简体中文',
        c84:'English',
        c85:'对不起，您还没设置密码请先设置密码',
        c86:'提示',
        c87:'去设置密码',
        c88:'当前版本:V',
        c881:'最新版本:V',
        c89:'版本更新',
        //editorPassword
        c90:'新密码（8-20位字符，需包含字母和数字）',
        c91:'确认密码',
        c92:'请输入正确的旧密码',
        //userAddressList
        c93:'通讯录',
        c94:'编辑',
        c95:'删除',
        c96:'新增通讯录',
        c97:'似乎已断开与互联网的连接，请连接后重试。确定关闭NULS钱包客户端？',
        c98:'确定关闭',
        c99:'节点么?',
        //editAliasin
        c100:'设置别名',
        c102:'您的地址',
        c103:'出于账户安全的考虑，账户别名设置确定后，将无法修改，请谨慎操作。',
        c104:'请输入别名',
        c105:'请输入不超过8个字符的别名，可包含中文、英文、下划线',
        c106:'别名长度不能大于8个字符',
        c107:'对不起，您的余额不足！',
        //newAccount
        c108:'保存成功！路径',
        c109:'请选择保存文件夹！',
        c110:'请您确认已备份好私钥',
        c111:'已经备份',
        c112:'马上备份',
        c114:'确认转账',
        c115:'此操作将删除该条通讯录, 是否继续?',
        c116:'请输入账户地址',
        c117:'账户地址长度在10到80个字符',
        //type
        type1:'共识奖励',
        type2:'转账交易',
        type3:'锁仓交易',
        type4:'解锁交易',
        type5:'零钱换整',
        type11:'设置别名',
        type90:'注册共识',
        type91:'加入共识',
        type92:'退出共识',
        type93:'黄牌惩罚',
        type94:'红牌惩罚',
        type95:'删除节点',
        c129:'复制成功',
        c130:'恭喜您！申请参与共识成功！',
        c131:'数据连接中，请耐心等待一下！',
        c132:'拼命加载中',
        c133:'请稍等，区块高度同步中....',
        c134:'暂无数据，请添加后再操作',
        c136:'请输入正确的转账金额：小数点前后最多八位',
        c137:'核心程序启动失败，请重试或联系开发人员',
        c138:'启动失败',
        c139:'高度',

        //bottomInfo
        purseVersion: '钱包版本',
        coreVersion: '核心版本',
        toUpdate: '可更新',
        blockState: '区块状态',
        local: '本地',
        backward: '落后',
        theMain: '测试网',
    },
    ...zhLocale
};
export default cn;