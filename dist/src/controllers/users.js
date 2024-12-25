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
exports.usersController = void 0;
const common_1 = require("@nestjs/common");
const users_1 = require("../service/users");
const platform_express_1 = require("@nestjs/platform-express");
let usersController = class usersController {
    async signup(body) {
        return (0, users_1.createUser)(body);
    }
    async signin(email, password) {
        return (0, users_1.getUserByEmail)(email, password);
    }
    async delete(id) {
        return (0, users_1.deleteUser)(id);
    }
    async update(id, body) {
        return (0, users_1.updateUserById)(id, body);
    }
    async updatePfp(id, file) {
        console.log('test', file);
        return (0, users_1.updateUserPfpById)(id, file);
    }
};
exports.usersController = usersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], usersController.prototype, "signup", null);
__decorate([
    (0, common_1.Get)('/:email&:password'),
    __param(0, (0, common_1.Param)('email')),
    __param(1, (0, common_1.Param)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], usersController.prototype, "signin", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], usersController.prototype, "delete", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], usersController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('/uploadpfp/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], usersController.prototype, "updatePfp", null);
exports.usersController = usersController = __decorate([
    (0, common_1.Controller)('users')
], usersController);
//# sourceMappingURL=users.js.map