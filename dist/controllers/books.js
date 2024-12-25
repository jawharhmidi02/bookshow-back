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
exports.booksController = void 0;
const common_1 = require("@nestjs/common");
const books_1 = require("../service/books");
const path = require("path");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
let booksController = class booksController {
    async create(body) {
        return (0, books_1.createBook)(body);
    }
    async get() {
        return (0, books_1.getBooks)();
    }
    async orderCategory(category) {
        return (0, books_1.getBooksOrderCategory)(category);
    }
    async orderTime() {
        return (0, books_1.getBooksOrderTime)();
    }
    async orderGenre(genre) {
        return (0, books_1.getBooksOrderGenre)(genre);
    }
    async retrieve(id) {
        return (0, books_1.getBookById)(id);
    }
    async retrieveuserbooks(id) {
        return (0, books_1.getBookByUserId)(id);
    }
    async update(id, body) {
        return (0, books_1.updateBookById)(id, body);
    }
    async delete(id) {
        return (0, books_1.deleteBook)(id);
    }
    async updateCover(id, file) {
        console.log('test', file);
        return (0, books_1.updateBookCoverById)(id, file);
    }
    async updatePdf(id, file) {
        console.log('test', file);
        return (0, books_1.updateBookPdfUrlById)(id, file);
    }
};
exports.booksController = booksController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], booksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], booksController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/order/category/:category'),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], booksController.prototype, "orderCategory", null);
__decorate([
    (0, common_1.Get)('/order/time/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], booksController.prototype, "orderTime", null);
__decorate([
    (0, common_1.Get)('/order/genre/:genre'),
    __param(0, (0, common_1.Param)('genre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], booksController.prototype, "orderGenre", null);
__decorate([
    (0, common_1.Get)('/byid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], booksController.prototype, "retrieve", null);
__decorate([
    (0, common_1.Get)('/byuserid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], booksController.prototype, "retrieveuserbooks", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], booksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], booksController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('/uploadcover/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], booksController.prototype, "updateCover", null);
__decorate([
    (0, common_1.Post)('/uploadpdf/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                console.log('herfe');
                const ext = path.extname(file.originalname);
                const filename = `${path.basename(file.originalname, ext)}-${Date.now()}${ext}`;
                cb(null, filename);
            },
        }),
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], booksController.prototype, "updatePdf", null);
exports.booksController = booksController = __decorate([
    (0, common_1.Controller)('books')
], booksController);
//# sourceMappingURL=books.js.map