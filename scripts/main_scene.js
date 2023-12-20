// シーンクラス
// 他のJSファイルから呼び出された場合はシーンを返す
class MainScene extends Phaser.Scene {
    
    // コンストラクタ
    constructor() {
        // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
        super('MainScene');
    }

    // シーンの事前読み込み処理
    preload() {
         // 画像の読み込み(使用する時の名前, パス)
        this.load.image('background', 'assets/background.png');
        this.load.image('taro', 'assets/taro.png');
        this.load.image('hanako', 'assets/hanako.png');
        this.load.image('apple', 'assets/apple.png');
        this.load.image('orange', 'assets/orange.png');
    }

    // シーン初期化処理
    create() {
        this.add.image(400, 300, 'background');
        const taro = this.physics.add.sprite(50, 50, 'taro');
        this.taro = taro;
        const hanako = this.physics.add.sprite(750, 400, 'hanako');
        this.hanako = hanako;
        let staticGroup = this.physics.add.staticGroup();
        for(let i = 0; i < 5; i++){
        let randx = Phaser.Math.Between(25, 775) ; // y は　50～750の間の値
        let randy =  Phaser.Math.Between(25, 425) ;  // y は　50～200の間の値
        staticGroup.create(randx,randy,'apple');
        }
        for(let i = 0; i < 5; i++){
        let randx2 = Phaser.Math.Between(25, 775) ; // y は　50～750の間の値
        let randy2 =  Phaser.Math.Between(25, 425) ;
        staticGroup.create(randx2,randy2,'orange');
        }
        this.physics.add.overlap(taro, staticGroup, stopgame, null, this);
        function stopgame(p){
            this.physics.pause();
        }
    }
     // 毎フレーム実行される繰り返し処理
    update(time, delta) {
         // キーボードの情報を取
         let cursors = this.input.keyboard.createCursorKeys();
         if(cursors.up.isDown){
             console.log("Up!!");
             this.taro.setVelocityY(-40);// 上方向の速度を設定
             this.hanako.setVelocityY(40);// 上方向の速度を設定
         } else if(cursors.down.isDown){
             console.log("down!!");
             this.taro.setVelocityY(40);// 下方向の速度を設
             this.hanako.setVelocityY(-40);// 下方向の速度を設
         }else if(cursors.left.isDown){
             console.log("Left");
             this.taro.setVelocityX(-40);// 左方向の速度を設定
             this.hanako.setVelocityX(40);// 左方向の速度を設定
         }else if(cursors.right.isDown){
             console.log("Right!!");
             this.taro.setVelocityX(40);// 右方向の速度を設定
             this.hanako.setVelocityX(-40);// 右方向の速度を設定
         }else{
             this.taro.setVelocityX(0);// 横方向の速度を0
             this.taro.setVelocityY(0);// 縦方向の速度を0
             this.hanako.setVelocityX(0);// 横方向の速度を0
             this.hanako.setVelocityY(0);// 縦方向の速度を0
        }
    }
}
