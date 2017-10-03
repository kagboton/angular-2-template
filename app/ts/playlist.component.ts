import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Video} from "./video";

@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html'
})

export class PlaylistComponent{
    /**
     * Methode to handle the display of infos of video after a click on the console
     * @param {Video} vid

    onSelect(vid:Video){
        console.log(JSON.stringify(vid));

    }*/

    @Input() videos : Array<Video>;
    @Output() onSelectedVideo = new EventEmitter<Video>();
    currentVideo:Video;

    ngOnInit(){
        this.currentVideo = this.videos[0];
    }

    onSelect(video:Video){
        this.onSelectedVideo.emit(video);
        this.currentVideo = video;
    }
}