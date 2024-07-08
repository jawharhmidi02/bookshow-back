import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DrizzleModule } from './drizzle/drizzle.module';

// Modules
import { usersModule } from './modules/users';
import { authorsModule } from './modules/authors';
import { booksModule } from './modules/books';
import { playlistBooksModule } from './modules/playlistbooks';
import { playlistsModule } from './modules/playlists';
import { ratesModule } from './modules/rates';
import { repliesModule } from './modules/replies';
import { reviewsModule } from './modules/reviews';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    usersModule, 
    authorsModule, 
    booksModule,
    playlistBooksModule,
    playlistsModule,
    ratesModule,
    repliesModule,
    reviewsModule,
    DrizzleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
