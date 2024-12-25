"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistbooksController = void 0;
const common_1 = require("@nestjs/common");
const playlistbooks_1 = require("../service/playlistbooks");
let playlistbooksController = class playlistbooksController {
    async create(body) {
        return (0, playlistbooks_1.createPlaylistBook)(body);
    }
    async retrieve(id) {
        return (0, playlistbooks_1.getPlaylistBookById)(id);
    }
    async getbytime(id) {
        return (0, playlistbooks_1.getPlaylistBookByIdOrderTime)(id);
    }
    async update(id_playlist, id_book, body) {
        return (0, playlistbooks_1.updatePlaylistBookById)(id_playlist, id_book, body);
    }
    async delete(id_playlist, id_book) {
        return (0, playlistbooks_1.deletePlaylistBooks)(id_playlist, id_book);
    }
};
exports.playlistbooksController = playlistbooksController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], playlistbooksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/byid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], playlistbooksController.prototype, "retrieve", null);
__decorate([
    (0, common_1.Get)('/byid/time/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], playlistbooksController.prototype, "getbytime", null);
__decorate([
    (0, common_1.Patch)('/:id_playlist&:id_book'),
    __param(0, (0, common_1.Param)('id_playlist')),
    __param(1, (0, common_1.Param)('id_book')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], playlistbooksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id_playlist&:id_book'),
    __param(0, (0, common_1.Param)('id_playlist')),
    __param(1, (0, common_1.Param)('id_book')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], playlistbooksController.prototype, "delete", null);
exports.playlistbooksController = playlistbooksController = __decorate([
    (0, common_1.Controller)('playlistbooks')
], playlistbooksController);
//# sourceMappingURL=playlistbooks.js.map