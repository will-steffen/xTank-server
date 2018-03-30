import { Game } from '../../game';
import { RendererController } from './renderer';
import { ConnectionController } from './connection';

export class FieldController {    
    renderer: RendererController;
    connection: ConnectionController;

    constructor(public game: Game) {
        this.renderer = new RendererController(this);
        this.connection = new ConnectionController(this);
    }

    create() {
        this.connection.create();
    }

    update(delta: number) {
        this.connection.sendPlayerState(
            this.game.player.tank.container.x,
            this.game.player.tank.container.y,
            this.game.player.tank.base.rotation,
            this.game.player.tank.gun.rotation,
        );
        this.renderer.update(delta);
    }
}
