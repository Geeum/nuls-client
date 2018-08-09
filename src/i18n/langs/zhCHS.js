import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

const cn = {
  message: {
    //public
    accountManagement: '账户管理',
    walletManagement: '钱包',
    accountAssetsManagement: '账户资产',
    transactionManagement: '交易管理',
    consensusManagement: '共识',
    setManagement: '设置',
    all: '全部',
    miningFee: ', 手续费： ',
    remarks: '备注',
    addressNull: '请选择账户地址！',
    transferNull: '请输入转账地址！',
    addressOrTransfer: '转账地址不能是账户地址！',
    transferNO: '请输入转账金额！',
    transferNO1: '请输入正确的转账金额为数字值！',
    transferNO2: '转账金额不能大于可用余额！',
    transferNO3: '转账金额不能小于0.01 NULS！',
    creditLow: '对不起，您选择的账户余额不足！',
    //input password
    passWordTitle: '请输入密码',
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    passWordSuccess: '恭喜您，申请成功',
    passWordFailed: '对不起，申请失败',
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
    income: '出块节点',
    annualYield: '节点总数',
    applicationsNode: '网络节点',
    //set password
    set: '设置',
    oldPassWord: '旧密码',
    setPassWord: '设置密码',
    setPassWord1: '设置密码',
    walletPassWord: '账户密码',
    walletPassWord1: '8-20位字符,需包含字母和数字',
    walletPassWord2: '密码错误',
    affirmWalletPassWord: '确认密码',
    passWordHint: '密码提示(可选)',
    passWordInfo: '请认真保存当前账户的密码，若账户密码丢失，很可能导致您的资产丢失！',
    passWordHintEmpty: '密码提示不能为空!',
    walletPassWordEmpty: '8-20位字符,需包含字母和数字',
    affirmWalletPassWordEmpty: '请再次输入密码',
    passWordAtypism: '两次输入密码不一致!',
    passWordAffirm: '确定',
    passWordCancel: '我确认钱包风险，暂不设置密码',
    passWordCuo: '密码错误',

    //first info
    firstInfoTitle: '创建或导入账户',
    createNewAccount: '创建账户',
    createNewAccountInfo: '您可以创建一个全新的账户',
    importAccount: '导入账户',
    importAccountInfo: '您可以导入keystore文件或明文私钥',
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
    sourceAddress: '转出地址',
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
    tabAlias1: '备注',
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
    miningFee1: '手续费',
    autograph: 'TxID',
    transactionState: '交易状态',
    blockHeight: '区块高度',

    //consensus
    c1: '委托总额',
    c1_1: '（全网）',
    c2: '节点总数',
    c3: '我的总体情况',
    c4: '创建节点',
    c5: '创建',
    c5_1: '查看',
    //currentBalance: '可用余额',
    c6: '可用余额',
    c7: '累计收益',
    c8: '委托节点',
    //pledge: '委托',
    c9: '委托',
    c10: '委托总额',
    c11: '全部共识',
    c12: '我的共识',

    statusSundefined: '',
    statusS0: '确认中',
    statusS1: '已确认',

    statusundefined: '',
    status0: '待共识',
    status1: '共识中',
    status2: '共识中',

    c16: '节点来源',
    c17: '佣金比例',
    c18: '信用值',
    c19: '参与人数',
    c20: '委托金额',
    //newNode
    c21: '自建节点共识',
    c22: '共识账户',
    c23: '出块地址',
    c24: '节点名称',
    c25: '保证金',
    c26: '代理佣金比例',
    c27: '节点介绍',
    c28: '手续费',
    c29: '确定',
    c30: '个',
    c31: '请输入保证金额！',
    c32: '保证金：为数字值,小数点前、后最多八位',
    c33: '保证金额不能大于可用余额！',
    c34: '保证金额必须大于2000！',
    c35: '请输入节点佣金比例！',
    c36: '佣金比例：为数字值，小数点前、后最多二位',
    c37: '节点佣金比例为：10-100！',
    c38: '请输入出块地址！',
    c39: '请输入节点名称！',
    c40: '请输入节点备注！',
    c41: '请输入节点名称不能大于30个字节',
    //agencyNode
    c43: '共识代理节点',
    c44: '请输入地址、别名或节点ID',
    c45: '搜索',
    c46: '综合排序',
    c47: '委托数量',
    //pledgeInfo
    c48: '我的委托总额明细',
    c49: '加入时间',
    c50: '查看',
    //addNode
    c51: '委托保证金',
    c52: '请输入委托保证金额！',
    c53: '保证金为数值,小数点前、后最多八位',
    c54: '保证金必须不低于2000',
    c542: '保证金必须小于可用余额',
    c541: '保证金必须在20000到200000之间',
    c543: '保证金必须小于可用余额',
    //allPledge
    c55: '委托总额明细',
    //myNode
    c56: '我的委托明细',
    c57: '追加',
    c58: '退出',
    c59: '已取消',
    c60: '从节点: ',
    c61: '确定取出 ',
    //nodeInfo
    c62: '注销节点',
    c63: '请输入搜索关键字！',
    c64: '委托数量',
    c65: '我们的工程师正专注研发，更多出色功能敬请期待！',
    //setPage
    c66: '系统设置',
    c67: '开机启动',
    c68: '消息提示',
    c69: '账户',
    c70: '共识',
    c71: '账本',
    c72: '网络',
    c73: '账户备份',
    c74: '账户备份',
    c75: '语言选择',
    c76: '请选择',
    c77: '通讯录',
    c78: '查看通讯录',
    c79: '密码管理',
    c80: '修改密码',
    c81: '当前版本',
    c82: '最新版本',
    c83: '简体中文',
    c84: 'English',
    c85: '对不起，您还没设置密码请先设置密码',
    c86: '提示',
    c87: '去设置密码',
    c88: '当前版本:V',
    c881: '最新版本:V',
    c89: '版本更新',
    //editorPassword
    c90: '新密码（8-20位字符，需包含字母和数字）',
    c91: '确认密码',
    c92: '请输入正确的旧密码',
    //userAddressList
    c93: '通讯录',
    c94: '编辑',
    c95: '删除',
    c96: '新增通讯录',
    c961: '编辑通讯录',
    c97: '似乎已断开与互联网的连接，请连接后重试。确定关闭NULS钱包客户端？',
    c98: '确定注销',
    c99: '节点么?',
    //editAliasin
    c100: '设置别名',
    c102: '账户地址',
    c103: '出于账户安全的考虑，账户别名设置确定后，将无法修改，请谨慎操作。',
    c104: '请输入别名',
    c1041: '请输入别名(只允许使用小写字母、数字、下划线（下划线不能在两端）)',
    c105: '只允许使用小写字母、数字、下划线（下划线不能在两端）',
    c106: '别名长度为1到10个字符',
    c107: '对不起，您的余额不足！',
    //newAccount
    c108: '保存成功！路径',
    c109: '请选择保存文件夹！',
    c110: '请您确认已备份好私钥',
    c111: '已经备份',
    c112: '马上备份',
    c114: '确认转账',
    c115: '此操作将删除该条通讯录, 是否继续?',
    c116: '请输入账户地址',
    c117: '账户地址长度在10到80个字符',
    //type
    typeundefined: '',
    type1: '共识奖励',
    type2: '转账交易',
    /*type3: '锁仓交易',
    type4: '解锁交易',
    type5: '零钱换整',*/
    type3: '设置别名',
    type4: '创建节点',
    type5: '加入共识',
    type6: '退出共识',
    type7: '黄牌惩罚',
    type8: '红牌惩罚',
    type9: '注销节点',
    c129: '复制成功',
    c130: '恭喜您！申请参与共识成功！',
    c131: '数据连接中，请耐心等待一下！',
    c132: '拼命加载中',
    c133: '请稍等，连接节点和高度同步中...',
    c134: '暂无数据，请添加后再操作',
    c136: '请输入正确的转账金额：小数点前后最多八位',
    c137: '核心程序启动失败，请重试或联系开发人员',
    c138: '启动失败',
    c139: '高度',
    c140: '选择语言',
    c141: '最小化',
    c142: '关闭',
    c143: '复制',
    c144: '显示/隐藏',
    c145: '点击复制',

    c146: 'KeyStore格式导入',
    c147: '只能上传keystore文件，且不超过2M',
    c148: '请选择keyStore文件！',
    c149: '上传只能是 keystore 格式文件',
    c150: '上传头像图片大小不能超过 2MB',
    c151: '版本更新检查',
    c152: '下载完成以后，程序会自动重启',
    c153: '后台运行',
    c154: '检查更新出错',
    c155: '正在检查更新...',
    c156: '检测到新版本，正在下载...',
    c157: '现在使用的就是最新版本，不用更新',
    c158: '共识锁定',
    c159: '此账户不需要密码',
    c160: '修改密码',
    c161: '设置密码',
    c162: '此账户没有设置密码，确定移除',
    c163: '此账户没有设置密码，确定备份',
    c164: '此账户没有设置密码，确定设置别名',
    c165: '此账户没有设置密码，确定加入节点么',
    c166: '共识账户没有设置密码，确定创建节点么',
    c167: '出块地址不能有密码',
    c168: '地址不合法',
    c169: '出块地址不能为共识账户',
    c170: '设置别名需要花费一个NULS',
    c171: '总花费',
    c172: '转出账户没有设置密码，确定转账么',
    c173: '备份私钥成功，备份路径',
    c174: '您使用的不是Chrome浏览器，可能有一些界面效果会有误差，建议您用Chrome内核的浏览器',

    c175:'新版本',
    c176:'下载新版本',
    c177:'新版本已下载完毕，点击退出当前版本即可完成更新',
    c178:'退出当前版本',
    c179:'确定取消升级',
    c180:'更新完成，重启生效',

    c181:'Keystore备份',
    c182:'点击将下载.keystore文件',
    c183:'请保存到安全的地方',
    c184:'明文私钥备份',
    c185:'私钥备份',
    c186:'安全警告',
    c187:'私钥未经加密，备份存在风险，',
    c188:'请保存到安全的地方，建议使用keystore进行备份。',

    c189:'导入Keystore',
    c190:'点击将浏览文件夹',
    c191:'选择.keystore文件导入',
    c192:'已完成.keystore文件导入',
    c193:'私钥导入',
    c194:'请选择keystore文件',
    c195:'对不起！下载失败，请重试。',
    c196:'对不起，您的浏览器不支持indexedDB,不能使用通讯录功能 ',
    c197:'导入账户申请已经提交，我们的网络需要一些时间确认，完成后您可以在【账户管理】中查看，请耐心等待。',
    c198:'对不起，密码错误',
    c199:'您还没有账户',
    c200:'退出管理',
    c201:'退出系统',


    refresh: '刷新',
    //bottomInfo
    purseVersion: '版本号',
    coreVersion: '核心版本',
    toUpdate: '可更新',
    blockState: '区块高度',
    local: '本地',
    backward: '落后',
    //theMain: '测试网',
    theMain: '主网',
  },
  ...zhLocale
};
export default cn
