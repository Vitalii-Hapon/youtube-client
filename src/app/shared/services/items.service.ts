import {Injectable} from '@angular/core';
import {Iresponse} from '../models/response';
import {Iitem} from '../models/item';

@Injectable({
              providedIn: 'root'
            })
export class ItemsService {

  private response: Iresponse = {
    kind: 'youtube#videoListResponse',
    etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/Cmodw7c5XPTM8Yg3kMXelihxek4"',
    pageInfo: {
      totalResults: 10,
      resultsPerPage: 10
    },
    items: [
      {
        kind: 'youtube#video',
        etag: 'Fznwjl6JEQdo1MGvHOGaz_YanRU/tmmI1yiRrmLWlKikXk1gD3TXsUI',
        id: 'YN8zNnV0sK8',
        snippet: {
          publishedAt: '2019-05-30T12:42:19.000Z',
          channelId: 'UCg8ss4xW9jASrqWGP30jXiw',
          title: 'Angular 8 - Быстрый курс за 60 минут',
          description: 'Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nTelegram: https://teleg.one/js_by_vladilen \nInstagram: https://www.instagram.com/vladilen.minin \nVK: https://vk.com/vladilen.minin \nГруппа VK: https://vk.com/js_by_vladilen \n\nReact Native: мобильная разработка на JavaScript:\nhttps://clc.to/rnative\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\n30 мая 2019 года бы релиз Angular 8 и я решил записать  по нему быстрый курс. В видео вы узнаете, как Angular работает, как его установить.\nВ результате урока я покажу создание Todo приложения с разными подходами. Разберем работу с сервером, сервисами, пайпами, коммуникацией между компонентами и немного RxJS\n\nИсходный код:\nhttps://github.com/vladilenm/angular8-cc\n\nAngular 8 - Быстрый курс за 60 минут',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/default.jpg',
              width: 120,
              height: 90
            },
            medium: {
              url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/mqdefault.jpg',
              width: 320,
              height: 180
            },
            high: {
              url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/hqdefault.jpg',
              width: 480,
              height: 360
            },
            standard: {
              url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/sddefault.jpg',
              width: 640,
              height: 480
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/maxresdefault.jpg',
              width: 1280,
              height: 720
            }
          },
          channelTitle: 'Владилен Минин',
          tags: [
            'angular',
            'angular 8',
            'angularjs',
            'js',
            'javascript',
            'rxjs',
            'angular 60 минут',
            'angular 1 час',
            'angular 8 1 час',
            'владилен минин',
            'уроки javascript',
            'angular 2',
            'angular 4',
            'angular уроки',
            'курс angular',
            'основы angular',
            'angular фреймворк',
            'angular уроки для начинающих',
            'уроки angular',
            'angular практика',
            'ангуляр',
            'angular изучение',
            'angular курс',
            'ангуляр 4 уроки',
            'angular уроки на русском'
          ],
          categoryId: '27',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Angular 8 - Быстрый курс за 60 минут',
            description: 'Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nTelegram: https://teleg.one/js_by_vladilen \nInstagram: https://www.instagram.com/vladilen.minin \nVK: https://vk.com/vladilen.minin \nГруппа VK: https://vk.com/js_by_vladilen \n\nReact Native: мобильная разработка на JavaScript:\nhttps://clc.to/rnative\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\n30 мая 2019 года бы релиз Angular 8 и я решил записать  по нему быстрый курс. В видео вы узнаете, как Angular работает, как его установить.\nВ результате урока я покажу создание Todo приложения с разными подходами. Разберем работу с сервером, сервисами, пайпами, коммуникацией между компонентами и немного RxJS\n\nИсходный код:\nhttps://github.com/vladilenm/angular8-cc\n\nAngular 8 - Быстрый курс за 60 минут'
          },
          defaultAudioLanguage: 'en-US'
        },
        statistics: {
          viewCount: '33265',
          likeCount: '1173',
          dislikeCount: '26',
          favoriteCount: '0',
          commentCount: '170'
        }
      },
      {
        kind: 'youtube#video',
        etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/uto79F2R8W05GFpiUAcLdFGs7PQ"',
        id: 'Fdf5aTYRW0E',
        snippet: {
          publishedAt: '2019-01-23T17:46:58.000Z',
          channelId: 'UC29ju8bIPH5as8OGnQzwJyA',
          title: 'Angular Crash Course',
          description: 'In this video we will talk about what Angular is and then jump in and build a small app With Angular 7, looking at most of the fundamental concepts like components, services, modules, etc\n\nSponsor:\nhttp://www.netlify.com\n\nCode:\nhttps://github.com/bradtraversy/angular-crash-todolist\n\n💖 Become a Patron: Show support & get perks!\nhttp://www.patreon.com/traversymedia\n\nWebsite & Udemy Courses\nhttp://www.traversymedia.com\n\nFollow Traversy Media:\nhttps://www.facebook.com/traversymedia\nhttps://www.twitter.com/traversymedia\nhttps://www.instagram.com/traversymedia',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/Fdf5aTYRW0E/default.jpg',
              width: 120,
              height: 90
            },
            medium: {
              url: 'https://i.ytimg.com/vi/Fdf5aTYRW0E/mqdefault.jpg',
              width: 320,
              height: 180
            },
            high: {
              url: 'https://i.ytimg.com/vi/Fdf5aTYRW0E/hqdefault.jpg',
              width: 480,
              height: 360
            },
            standard: {
              url: 'https://i.ytimg.com/vi/Fdf5aTYRW0E/sddefault.jpg',
              width: 640,
              height: 480
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/Fdf5aTYRW0E/maxresdefault.jpg',
              width: 1280,
              height: 720
            }
          },
          channelTitle: 'Traversy Media',
          tags: [
            'angular',
            'angular 7',
            'angular tutorial',
            'angularjs'
          ],
          categoryId: '28',
          liveBroadcastContent: 'none',
          localized: {
            'title': 'Angular Crash Course',
            'description': 'In this video we will talk about what Angular is and then jump in and build a small app With Angular 7, looking at most of the fundamental concepts like components, services, modules, etc\n\nSponsor:\nhttp://www.netlify.com\n\nCode:\nhttps://github.com/bradtraversy/angular-crash-todolist\n\n💖 Become a Patron: Show support & get perks!\nhttp://www.patreon.com/traversymedia\n\nWebsite & Udemy Courses\nhttp://www.traversymedia.com\n\nFollow Traversy Media:\nhttps://www.facebook.com/traversymedia\nhttps://www.twitter.com/traversymedia\nhttps://www.instagram.com/traversymedia'
          },
          defaultAudioLanguage: 'en'
        },
        statistics: {
          viewCount: '456979',
          likeCount: '8213',
          dislikeCount: '131',
          favoriteCount: '0',
          commentCount: '555'
        }
      },
      {
        kind: 'youtube#video',
        etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/6e0k9ik7TThWpqueHGOhTRIN1-A"',
        id: 'k5E2AVpwsko',
        snippet: {
          publishedAt: '2017-09-05T16:48:15.000Z',
          channelId: 'UCWv7vMbMWH4-V0ZXdmDpPBA',
          title: 'Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh',
          description: '🔥Get the COMPLETE COURSE (60% OFF - LIMITED TIME): https://programmingwithmosh.com/courses/angular\n\nThis Angular tutorial teaches you the fundamentals of Angular and TypeScript.\n\nSUBSCRIBE FOR MORE VIDEOS!\nhttps://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA?sub_confirmation=1\n\n\nTABLE OF CONTENT \n\n00:00 Introduction\n02:54 What is Angular?\n04:54 Architecture of Angular Apps\n08:41 Setting Up the Development Environment\n11:25 Your First Angular App\n13:50 Structure of Angular Projects\n20:43 Webpack\n23:57 Angular Version History \n27:31 Course Structure\n31:55 TypeScript Fundamentals\n32:34 What is TypeScript?\n34:58 Your First TypeScript Program\n37:57 Declaring Variables\n42:46 Types\n48:29 Type Assertions\n51:15 Arrow Functions\n52:59 Interfaces\n56:54 Classes\n01:01:22 Objects\n01:05:31 Constructors\n01:08:22 Access Modifiers\n01:11:18 Access Modifiers in Constructor Parameters\n01:12:58 Properties\n01:18:15 Modules\n01:23:22 Angular Fundamentals\n01:23:41 Building Blocks of Angular Apps\n01:27:22 Creating Components\n01:37:00 Generating Components Using Angular CLI\n01:41:40 Templates\n01:44:08 Directives\n01:47:34 Services\n01:52:02 Dependency Injection\n01:59:22 Generating Services Using Angular CLI\n02:01:32 Exercise\n \n\nSTAY IN TOUCH\n\nhttps://www.facebook.com/programmingwithmosh/\nhttps://twitter.com/moshhamedani',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/k5E2AVpwsko/default.jpg',
              width: 120,
              height: 90
            },
            medium: {
              url: 'https://i.ytimg.com/vi/k5E2AVpwsko/mqdefault.jpg',
              width: 320,
              height: 180
            },
            high: {
              url: 'https://i.ytimg.com/vi/k5E2AVpwsko/hqdefault.jpg',
              width: 480,
              height: 360
            },
            standard: {
              url: 'https://i.ytimg.com/vi/k5E2AVpwsko/sddefault.jpg',
              width: 640,
              height: 480
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/k5E2AVpwsko/maxresdefault.jpg',
              width: 1280,
              height: 720
            }
          },
          channelTitle: 'Programming with Mosh',
          tags: [
            'learn angular 4',
            'learn angular 4 from scratch',
            'angular4',
            'learn angular',
            'angular tutorial',
            'angular 4',
            'Angular',
            'angular 5',
            'angular 5 course',
            'angular course',
            'angular.js',
            'angularjs',
            'angular 2',
            'angular2',
            'angular 4 tutorial',
            'angular 4 tutorial for beginners',
            'angular tutorial for beginners',
            'angular 4 crash course',
            'angular 4 in 60 minutes',
            'angularjs 4',
            'angular 4 tutorial for beginners step by step',
            'angular js',
            'angularjs tutorial for beginners',
            'angular 6',
            'angular 7'
          ],
          categoryId: '22',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh',
            description: '🔥Get the COMPLETE COURSE (60% OFF - LIMITED TIME): https://programmingwithmosh.com/courses/angular\n\nThis Angular tutorial teaches you the fundamentals of Angular and TypeScript.\n\nSUBSCRIBE FOR MORE VIDEOS!\nhttps://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA?sub_confirmation=1\n\n\nTABLE OF CONTENT \n\n00:00 Introduction\n02:54 What is Angular?\n04:54 Architecture of Angular Apps\n08:41 Setting Up the Development Environment\n11:25 Your First Angular App\n13:50 Structure of Angular Projects\n20:43 Webpack\n23:57 Angular Version History \n27:31 Course Structure\n31:55 TypeScript Fundamentals\n32:34 What is TypeScript?\n34:58 Your First TypeScript Program\n37:57 Declaring Variables\n42:46 Types\n48:29 Type Assertions\n51:15 Arrow Functions\n52:59 Interfaces\n56:54 Classes\n01:01:22 Objects\n01:05:31 Constructors\n01:08:22 Access Modifiers\n01:11:18 Access Modifiers in Constructor Parameters\n01:12:58 Properties\n01:18:15 Modules\n01:23:22 Angular Fundamentals\n01:23:41 Building Blocks of Angular Apps\n01:27:22 Creating Components\n01:37:00 Generating Components Using Angular CLI\n01:41:40 Templates\n01:44:08 Directives\n01:47:34 Services\n01:52:02 Dependency Injection\n01:59:22 Generating Services Using Angular CLI\n02:01:32 Exercise\n \n\nSTAY IN TOUCH\n\nhttps://www.facebook.com/programmingwithmosh/\nhttps://twitter.com/moshhamedani'
          },
          defaultAudioLanguage: 'en-US'
        },
        statistics: {
          viewCount: '1266085',
          likeCount: '18342',
          dislikeCount: '473',
          favoriteCount: '0',
          commentCount: '1255'
        }
      },
    ]
  };

  constructor() {
  }

  public getItems(): Iitem[] {
    return this.response.items;
  }
}
