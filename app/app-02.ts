/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts" />


import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
import { Article } from './model/article';


@Component({
    selector: 'reddit-article',
    inputs:['article'],//定义从外面传进来的变量
    host: {
        class: 'row'
    },
    template: `
    
    
    <div class="four wide column center aligned votes">
        <div class="ui statistic">
            <div class="value">
                {{article.votes}}
            </div>
            <div class="label">
                Points
            </div>
        </div>
    </div>
    
    <div class="twelve wide column">
        <a class="ui large header" href="{{article.link}}">
            {{article.title}}
        </a>
        <div class="meta">({{article.domain()}})</div>
        <ul class="ui big horizontal list voters">
            <li class="item">
                <a href (click)="voteUp()">
                    <i class="arrow up icon">
                    </i>
                        upvote
                </a>
            </li>
            
            <li class="item">
                <a href (click)="voteDown()">
                    <i class="arrow down icon">
                    </i>
                        downvote
                </a>
            </li>
        
        </ul>
    </div>
    `
})
/**
 * name
 */
export class ArticleComponent {
    // title: string;
    // link: string;
    // votes: number;

    article: Article;

    // constructor() {
    //     this.article = new Article('Angular 2', 'http://angular.io', 10);

    //     // this.title = 'angular2';
    //     // this.link = 'http://angular.io';
    //     // this.votes = 10;
    // }

    voteUp() {
        this.article.voteUp();
        return false;
    }
    voteDown() {
        this.article.voteDown();
        return false;
    }
}