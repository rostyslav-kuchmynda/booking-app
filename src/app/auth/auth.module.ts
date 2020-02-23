import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

const GOOGLE_CLIENT_ID = '1003806394659-e3tkp33qg7el4s7nf9prfl8tnldkurs8.apps.googleusercontent.com';
const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(GOOGLE_CLIENT_ID),
  },
]);

export function provideConfig() {
  return CONFIG;
}

@NgModule({
  declarations: [AuthenticationPageComponent],
  imports: [SharedModule, SocialLoginModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
  ],
})
export class AuthModule {}
