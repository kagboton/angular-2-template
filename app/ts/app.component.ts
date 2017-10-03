import {Component} from 'angular2/core';
import {Config} from "./config.service";
import {Video} from "./video";
import {PlaylistComponent} from "./playlist.component";
import {VideoplayerComponent} from "./videoplayer.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent, VideoplayerComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;

    videos:Array<Video>;
    video: Video;

    constructor(){
        this.videos = [
            new Video(1, "Learn Angular 2 from Scratch", "_-CD_5YhJTA", "This Angular 2 tutorial teaches you the fundamentals of Angular. "),
            new Video(2, "Ionic Framework", "2GCeWf75nN4", "Creer une application Ionic"),
        ];

        this.video = this.videos[0];

    }

    onVideoSelected(video:Video){
        this.video = video;
    }
}
