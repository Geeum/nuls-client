module.exports = {
    message: {
        //public
        accountManagement:'Account',
        walletManagement:'Wallet',
        transactionManagement:'Transaction',
        consensusManagement:'Consensus',
        setManagement:'Set',
        all:'All',
        miningFee:'Transaction fee 0.01 NULS',
        remarks:'Remarks',
        addressNull:'Please input the source address.',
        transferNull:'Please input the destination address.',
        addressOrTransfer:'The destination address cannot be the same as the source address.',
        transferNO:'Please input transfer amount.',
        transferNO1:'Please check the amount.',
        transferNO2:'Lack of balance.',
        transferNO3:'Transfer amount can not be less than 0.01 NULS',
        creditLow:'Lack of balance.',
        //input password
        //public
        passWordTitle: 'Please input your password',
        confirmButtonText: 'Confirm ',
        cancelButtonText: 'Cancel',
        passWordSuccess: 'Congratulations,a new account created！',
        passWordFailed: 'Sorry,failed to create an account！',
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
        fund: 'My asset',
        fundTotal: 'Balance',
        fundUsable: 'Available',
        fundLock: 'Frozen',
        consensus1: 'Consensus',
        pledge: 'Deposit',
        income: 'Minted',
        annualYield: 'NodeNo.',
        applicationsNode: 'Applications Node',
        //set password
        set: 'Set',
        oldPassWord: 'old password',
        setPassWord: 'new password',
        walletPassWord: 'Wallet password (8-20 characters, lower case letters and Numbers)',
        affirmWalletPassWord: 'Confirm password',
        passWordHint: 'Password hint',
        passWordInfo: 'Please remember your password,and password loss is likely to cause your asset loss!',
        passWordHintEmpty: 'Password hint can not be empty!',
        walletPassWordEmpty: 'Please input your password!',
        affirmWalletPassWordEmpty: 'Please input the password again!',
        passWordAtypism: 'Two passwords are different!',
        passWordAffirm: 'Submit',
        passWordCancel: 'I understood the risk, do not set the password.',
        //first info
        firstInfoTitle:'Create or import an account.',
        createNewAccount: 'Create a new account',
        createNewAccountInfo: 'Create a new account.',
        importAccount: 'Import account',
        importAccountInfo: 'You can import your account from private key or QR code.',
        //new account
        newAccountTitle: 'congratulations! You have already created a new account! Please backup it!',
        newAccountAddress: 'Account address',
        newAccountKey: 'Private Key',
        newAccountBackupsKey: 'Private Key backup',
        newAccountBackupsKeyInfo: 'Click to download TXT file, please save to a safe place!',
        newAccountBackupsCode: 'Backup as QR code',
        newAccountBackupsCodeInfo: 'Click here to download the QR code, please save it to a safe place!',
        newAccountBackupsNuls: '.NULS backup',
        newAccountBackupsNulsInfo: 'Click to download.NULS file, please save to a safe place!',
        newAccountSubmit: 'Submit',
        newAccountReset: 'Understood the risks, but do not backup.',
        //wallet index
        indexAccountAddress: 'Accounts',
        indexAccountHome: 'Account Home',
        indexProperty: 'Assets',
        indexSum: 'Total balance',
        indexUsable: 'Available',
        indexLock: 'Frozen',
        operation: 'Operation',
        transfer: 'Transfer',
        confirmed: 'confirmed',
        confirming: 'confirming',
        rollOut:'Source',
        rollIn:'Destination',
        download: 'Download',

        transactionRecord: 'Transaction history',
        transactionType: 'Type',
        //转账
        recorded: 'History',
        assetChange: 'Amount change',
        state: 'State',
        time: 'Date',
        //transfer
        sourceAddress:'Source Address',
        destinationAddress:'Destination Address',
        transferAmount:'Amount',
        currentBalance:'Current balance',
        select:'select',
        //freezeList
        freezeList:'Frozen list',
        type:'type',
        amount:'amount change',
        freezeTime:'freezeDate',
        thawingTime:'thawingDate',
        //userInfo
        userInfoTitle:'Account Address',
        tabName:'account',
        tabAlias:'alias',
        tabRemove:'remove',
        tabBackups:'backup',
        //inportAccount
        inportAccount:'Import account',
        key:'Restore private key',
        keyLow:'Please input your private key',
        code:'Restore QR rode',
        codeLow:'Please upload your QR code',
        //dealInfo
        input:'input',
        output:'output',
        overview: 'overview',
        tradingTime: 'date',
        miningFee1:'transaction tee',
        autograph: 'signature',
        transactionState: 'transaction state',
        blockHeight: 'block height',

        //consensus
        c1:'Total mortgage amount ',
        c1_1:'(whole network)',
        c2:'Total recognition',
        c3:'My overall situation',
        c4:'Create a node',
        c5:'Establish',
        c6:'Balance',
        c7:'Income',
        c8:'Delegate node',
        c9:'Entrust',
        c10:'Total entrustment',
        c11:'All consensus',
        c12:'My consensus',
        c13:'No',
        c14:'Waitint',
        c15:'Consensusing',
        c16:'address',
        c17:'commission',
        c18:'Credit value',
        c19:'participants',
        c20:'amount',
        //newNode
        c21:'Self built node consensus',
        c22:'Consensus account',
        c23:'Block address',
        c24:'Node name',
        c25:'Bond',
        c26:'Agency commission ratio',
        c27:'Node introduction',
        c28:'Service Charge',
        c29:'Determine',
        //
        c30:'个',
        c31:'Please enter the guaranteed amount！',
        c32:'Please enter the correct guaranteed amount for the digital value！',
        c33:'The amount of guarantee should not be greater than the available balance！',
        c34:'The guaranteed amount must be more than 20000！',
        c35:'The guaranteed amount must exceed 20000！',
        c36:'Please enter the correct number of node commissions！',
        c37:'The proportion of node Commission is：0-20！',
        c38:'Please enter a block address！',
        c39:'Please enter the name of the node！',
        c40:'Please enter the node notes！',
        c41:'Please enter the name of the node not more than 50 bytes！',
        //agencyNode
        c43:'Consensus agent node',
        c44:'Please enter an alias or address',
        c45:'Search',
        c46:'Please choose the sort way',
        c47:'Residual entrustment',
        //pledgeInfo
        c48:'My total amount of entrustment is detailed',
        c49:'Join time',
        c50:'See',
        //addNode
        c51:'Mortgage deposit',
        c52:'Please enter the entrustment guarantee amount！',
        c53:'Please enter the correct entrustment guarantee amount for digital value',
        c54:'The amount of the entrustment guarantee should not be greater than the available balance',
        //allPledge
        c55:'Total amount of mortgage',
        //myNode
        c56:'My mortgage details',
        c57:'Additional',
        c58:'Out',
        c59:'Have been cancelled',
        c60:'Decide to quit',
        c61:'Exit node',
        //nodeInfo
        c62:'Close node',
        c63:'Please enter the search key！',
        c64:'Residual mortgages',
        c65:'Our engineers are focusing on R & D, and more excellent functions are expected to look forward to！',
        //setPage
        c66:'System setup',
        c67:'Start up',
        c68:'Message hints',
        c69:'Account',
        c70:'Consensus',
        c71:'Books',
        c72:'Network',
        c73:'Journal',
        c74:'view log',
        c75:'Language selection',
        c76:'Please choose',
        c77:'Address book management',
        c78:'View the address book',
        c79:'Purse password management',
        c80:'Modify the password',
        c81:'current version',
        c82:'Updated version',
        c83:'Chinese',
        c84:'English',
        c85:'Sorry, you have not set the password, please set the password first',
        c86:'Prompt',
        c87:'To set password',
        c88:'Be sure to upgrade to the wallet version？',
        c89:'Version update',
        //editorPassword
        c90:'New cipher (8-16 bit characters, include case letters and numbers)',
        c91:'Confirm password',
        c92:'Please enter the correct old password',
        //userAddressList
        c93:'Mail list',
        c94:'edit',
        c95:'delete',
        c96:'New address book',
        c97:'It seems that the connection to the Internet has been disconnected. Please try again after the connection. Do you decide to close the NULS wallet client?',
        c98:'Determine the closure',
        c99:'node?',
        //editAliasin
        c100:'Setting alias',
        c102:'Your address',
        c103:'For account security considerations, the account alias will not be modified after setting up the alias, please operate carefully.',
        c104:'Please enter an alias',
        c105:'Please enter an alias with no more than 8 characters, which can include Chinese, English, and underline',
        c106:'The alias length can not be more than 8 characters',
        c107:'I\'m sorry, your balance is not enough!',

        //Bottom info
        purseVersion: 'Wallet version',
        coreVersion: 'Core version',
        toUpdate: 'Latest version',
        blockState: 'Block',
        local: 'Local height',
        backward: 'Backward',
        theMain: 'Mainnet height',
    }
}