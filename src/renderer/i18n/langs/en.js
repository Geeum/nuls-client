import enLocale from 'element-ui/lib/locale/lang/en'

const en = {
  message: {
    //public
    accountManagement: 'Account',
    walletManagement: 'Wallet',
    accountAssetsManagement: 'Account assets',
    transactionManagement: 'Transaction',
    consensusManagement: 'Consensus',
    setManagement: 'Settings',
    all: 'All',
    miningFee: 'Transaction fee: 0.01 NULS',
    remarks: 'Remarks',
    addressNull: 'Please select the source address.',
    transferNull: 'Please input the destination address.',
    addressOrTransfer: 'The destination address cannot be the same as the source address.',
    transferNO: 'Please input transfer amount.',
    transferNO1: 'Please check the amount.',
    transferNO2: 'Your balance is insufficient for this transfer.',
    transferNO3: 'Transfer amount can not be less than 0.01 NULS',
    creditLow: 'Your balance is insufficient for this transfer.',
    //input password
    //public
    passWordTitle: 'Please input your password',
    confirmButtonText: 'Confirm ',
    cancelButtonText: 'Cancel',
    passWordSuccess: 'Congratulations, apply for success',
    passWordFailed: 'Sorry, the application failed',
    passWordWasincorrect: 'Incorrect password！',
    enterCance: 'Cancel',
    //top nav
    home: 'Home',
    wallet: 'Wallet',
    consensus: 'Consensus',
    applications: 'Applications',
    more: 'More',
    news: 'News',
    //home
    fund: 'My assets',
    fundTotal: 'Balance',
    fundUsable: 'Available',
    fundLock: 'Frozen',
    consensus1: 'Consensus info of testnet',
    pledge: 'Total Deposits',
    income: 'Total Minted',
    annualYield: 'Agent Nodes',

    applicationsNode: 'Nodes Running',
    //set password
    set: 'Set',
    oldPassWord: 'Current password',
    setPassWord: 'New password',
    walletPassWord: 'Account password',
    walletPassWord1: '8-20 characters, letters and numbers',
    affirmWalletPassWord: 'Confirm password',
    passWordHint: 'Password hint',
    passWordInfo: 'Please remember your password and password loss is likely to cause your asset loss!',
    passWordHintEmpty: 'Password hint can not be empty!',
    walletPassWordEmpty: '8-20 characters, letters and Numbers',
    affirmWalletPassWordEmpty: 'Please confirm your password!',
    passWordAtypism: 'Your passwords do not match!',
    passWordAffirm: 'Submit',
    passWordCancel: 'I understand the risk, keep my password blank.',
    //first info
    firstInfoTitle: 'Create or import an account.',
    createNewAccount: 'Create a new account',
    createNewAccountInfo: 'Create a new account.',
    importAccount: 'Import account',
    importAccountInfo: 'You can import your account from private key.',
    //new account
    newAccountTitle: 'Congratulations! You have created a new account! Make sure back it up!',
    newAccountAddress: 'Address',
    newAccountKey: 'Private Key',
    newAccountBackupsKey: 'Private Key backup',
    newAccountBackupsKeyInfo: 'Click to download .txt file, DO NOT share under any circumstances and keep in a safe place!',
    newAccountBackupsCode: 'Backup as QR code',
    newAccountBackupsCodeInfo: 'Click here to download the QR code, DO NOT share under any circumstances and keep in a safe place!',
    newAccountBackupsNuls: '.nuls backup',
    newAccountBackupsNulsInfo: 'Click to download .nuls file, DO NOT share under any circumstances and keep in a safe place!',
    newAccountSubmit: 'Done',
    newAccountReset: 'Backup later.',
    //wallet index
    indexAccountAddress: 'Accounts',
    indexAccountHome: 'Account Assets',
    indexProperty: 'Assets',
    indexSum: 'Total Balance',
    indexUsable: 'Available',
    indexLock: 'Frozen',
    operation: 'Operation',
    transfer: 'Transfer',
    confirmed: 'Confirmed',
    confirming: 'Confirming',
    rollOut: 'Source',
    rollIn: 'Destination',
    download: 'Download',

    transactionRecord: 'Transaction History',
    transactionType: 'Type',
    //转账
    recorded: 'History',
    assetChange: 'Amount change',
    state: 'State',
    time: 'Date',
    //transfer
    sourceAddress: 'Source Address',
    destinationAddress: 'Destination Address',
    transferAmount: 'Amount',
    currentBalance: 'Balance',
    select: 'Select',
    //freezeList
    freezeList: 'Frozen list',
    type: 'Type',
    amount: 'Amount change',
    freezeTime: 'FreezeDate',
    thawingTime: 'Thawing',
    //userInfo
    userInfoTitle: 'Account Address',
    tabName: 'Account',
    tabAlias: 'Name',
    tabRemove: 'Remove',
    tabBackups: 'Backup',
    //inportAccount
    inportAccount: 'Import account',
    key: 'Restore private key',
    keyLow: 'Please input your private key',
    code: 'Restore QR rode',
    codeLow: 'Please upload your QR code',
    //dealInfo
    input: 'Input',
    output: 'Output',
    overview: 'Overview',
    tradingTime: 'Date',
    miningFee1: 'Transaction fee',
    autograph: 'Txid',
    transactionState: 'Transaction state',
    blockHeight: 'Block Height',

    //consensus
    c1: 'Total deposit of testnet',
    c1_1: '',
    c2: 'Running agent nodes',
    c3: 'Profile',
    c4: 'My agent',
    c5: 'Create',
    c5_1: 'Check',
    c6: 'Balance',
    c7: 'Income',
    c8: 'Agent',
    c9: 'Entrust',
    c10: 'Total entrustment',
    c11: 'All consensus',
    c12: 'My consensus',

    statusSundefined:'',
    statusS0: 'confirming',
    statusS1: 'confirmed',

    statusundefined: '',
    status0: 'Out',
    status1: 'Wait',
    status2: 'Active',

    c16: 'Address',
    c17: 'Commission',
    c18: 'Credit',
    c19: 'Participants',
    c20: 'Amount',
    //newNode
    c21: 'Self built node consensus',
    c22: 'Consensus account',
    c23: 'Block address',
    c24: 'Node name',
    c25: 'Deposit',
    c26: 'Commission ratio',
    c27: 'Introduce',
    c28: 'Fee',
    c29: 'Confirm',
    //
    c30: '',
    c31: 'Please enter the deposit amount.',
    c32: 'Please enter the correct deposit amount for the digital value.',
    c33: 'The amount of deposit should not be greater than the available balance.',
    c34: 'The guaranteed amount must be more than 2000.',
    c35: 'The guaranteed amount must exceed 2000.',
    c36: 'Please enter the correct number of node commissions.',
    c37: 'Commission is：10-100',
    c38: 'Please enter a block address！',
    c39: 'Please enter the name of the node！',
    c40: 'Please enter the node notes！',
    c41: 'Please enter the name of the node not more than 50 bytes！',
    //agencyNode
    c43: 'Consensus agent node',
    c44: 'Please enter node name or address',
    c45: 'Search',
    c46: 'Choose sort',
    c47: 'Deposit',
    //pledgeInfo
    c48: 'My total amount of entrustment is detailed',
    c49: 'Join time',
    c50: 'View',
    //addNode
    c51: 'Deposit',
    c52: 'Please enter the entrustment depositamount！',
    c53: 'Please enter the correct entrustment deposit amount for digital value',
    c54: 'No less than 2000',
    c542: 'Less than the balance',
    c541: 'No less than 20000',
    c543: 'less than the balance',

    //allPledge
    c55: 'Total amount of deposit',
    //myNode
    c56: 'My depositt details',
    c57: 'Additional',
    c58: 'Out',
    c59: 'Have been cancelled',
    c60: 'Decide to quit',
    c61: 'Exit node',
    //nodeInfo
    c62: 'Close node',
    c63: 'Please enter the key word！',
    c64: 'Deposit',
    c65: 'More excellent functions are expected soon',
    //setPage
    c66: 'Settings',
    c67: 'Start up',
    c68: 'Message hints',
    c69: 'Account',
    c70: 'Consensus',
    c71: 'Ledger',
    c72: 'Network',
    c73: 'Backups',
    c74: 'Account backups',
    c75: 'Language',
    c76: 'Please choose',
    c77: 'Contacts',
    c78: 'Address books',
    c79: 'Wallet password management',
    c80: 'Change the password',
    c81: 'Current version',
    c82: 'Updated version',
    c83: 'Chinese',
    c84: 'English',
    c85: 'Sorry, you have not set the password, please set the password first',
    c86: 'Notifications',
    c87: 'To set password',
    c88: 'Current version:V',
    c881: 'Latest version:V',
    c89: 'Version update',
    //editorPassword
    c90: 'New cipher (8-16 bit characters, include letters and numbers)',
    c91: 'Confirm password',
    c92: 'Please enter the correct current password',
    //userAddressList
    c93: 'Contacts',
    c94: 'Edit',
    c95: 'Delete',
    c96: 'New contact',
    c97: 'It seems that you do not have an internet connection, please try again later. Would you like to close the NULS Client??',
    c98: 'Determine close',
    c99: 'node?',
    //editAliasin
    c100: 'Name Settings',
    c102: 'Your address',
    c103: 'To ensure your account is safe, your name can not be changed after you have created one, please choose carefully.',
    c104: 'Please enter a name',
    c105: 'Please enter a name with no more than 8 characters, which may include Chinese, English, and underline',
    c106: 'Sorry, the name length can not be more than 8 characters.',
    c107: 'I\'m sorry, your balance is to low to complete this action.',

    //newAccount
    c108: 'Save success! Route',
    c109: 'Please select the save folder',
    c110: 'Please backup your private key',
    c111: 'backed up',
    c112: 'OK',
    c114: 'Transfer',
    c115: 'This operation will delete the address book, does it continue',
    c116: 'Please enter the account address',
    c117: 'The length of the account address is 10 to 80 characters',
    //type
    typeundefined:'',
    type1: 'Reward',
    type2: 'Transfer',
   /* type3: 'Lock',
    type4: 'Unlock',
    type5: 'Change',*/
    type51: 'Aliased',
    type90: 'Register',
    type91: 'Join',
    type92: 'Out',
   /* type93: 'Yellow',
    type94: 'Red',*/
    type95: 'Delete',

    c129: 'Copy success',
    c130: 'Congratulations, Application to participate in the consensus success',
    c131: 'In the data connection, please wait for a moment.',
    c132: 'loading...',
    c133: 'Please wait a moment, the block is in high synchronization....',
    c134: 'No data, please add it again',
    c136: 'The most eight bits before and after the decimal point',
    c137: 'The core program failed to start. Please try again or contact developers.',
    c138: 'Startup failure',
    c139: 'Height',
    c140: 'Choice language',
    c141: 'Minimize',
    c142: 'Close',
    c143: 'Copy',
    c144: 'display/hide',
    c145:'Click Copy txid',

    c146:'KeyStore format import',
    c147:'Keystore files can only be uploaded, and not more than 2M',
    c148:'Please select the keyStore file',
    c149:'Uploading can only be keystore file',
    c150:'The size of the uploaded image can not be more than 2MB',
    c151:'Version update check',
    c152:'After the download is completed, the program will restart automatically',
    c153:'Backstage',
    c154:'Check update error',
    c155:'Checking updatesing',
    c156:'A new version is detected and is being downloading',
    c157:'The latest version is in use, not to be updated',
    c158:'Consensus locking',
    c159:'This account not password',
    c160:'Edit password',
    c161:'Set password',
    c162:'The password is not set in this account and is determined to be removed',
    c163:'This account does not set a password to determine the backup',
    c164:'The password is not set in this account, and the alias is set',
    c165:'There is no password in this account. Do you want to join the node',
    c166:'There is no password in the consensus account. Do you want to create nodes',
    c167:'A block address can not have a password',

    //Bottom info
    refresh:'Refresh',
    purseVersion: 'Wallet',
    coreVersion: 'Core',
    toUpdate: 'Latest',
    blockState: 'Block',
    local: 'Local height',
    backward: 'Behind',
    theMain: 'Testnet height',
  },
  ...enLocale
}
export default en