import { DatabaseInterface, DatabaseInterfaceSessions } from '@accounts/types';

import { Configuration } from './types/configuration';

export class DatabaseManager implements DatabaseInterface {
  private userStorage: DatabaseInterface;
  private sessionStorage: DatabaseInterface | DatabaseInterfaceSessions;

  constructor(configuration: Configuration) {
    this.validateConfiguration(configuration);
    this.userStorage = configuration.userStorage;
    this.sessionStorage = configuration.sessionStorage;
  }

  private validateConfiguration(configuration: Configuration): void {
    if (!configuration) {
      throw new Error(
        '[ Accounts - DatabaseManager ] configuration : A configuration object is required on DatabaseManager'
      );
    }
    if (!configuration.userStorage) {
      throw new Error(
        '[ Accounts - DatabaseManager ] configuration : A userStorage DatabaseInterface is required'
      );
    }
    if (!configuration.sessionStorage) {
      throw new Error(
        '[ Accounts - DatabaseManager ] configuration : A sessionStorage DatabaseInterface is required'
      );
    }
  }

  // Return the createUser function from the userStorage
  public get createUser(): DatabaseInterface['createUser'] {
    return this.userStorage.createUser.bind(this.userStorage);
  }

  // Return the findUserById function from the userStorage
  public get findUserById(): DatabaseInterface['findUserById'] {
    return this.userStorage.findUserById.bind(this.userStorage);
  }

  // Return the findUserByEmail function from the userStorage
  public get findUserByEmail(): DatabaseInterface['findUserByEmail'] {
    return this.userStorage.findUserByEmail.bind(this.userStorage);
  }

  // Return the findUserByUsername function from the userStorage
  public get findUserByUsername(): DatabaseInterface['findUserByUsername'] {
    return this.userStorage.findUserByUsername.bind(this.userStorage);
  }

  // Return the findPasswordHash function from the userStorage
  public get findPasswordHash(): DatabaseInterface['findPasswordHash'] {
    return this.userStorage.findPasswordHash.bind(this.userStorage);
  }

  // Return the findUserByEmailVerificationToken function from the userStorage
  public get findUserByEmailVerificationToken(): DatabaseInterface['findUserByEmailVerificationToken'] {
    return this.userStorage.findUserByEmailVerificationToken.bind(this.userStorage);
  }

  // Return the findUserByResetPasswordToken function from the userStorage
  public get findUserByResetPasswordToken(): DatabaseInterface['findUserByResetPasswordToken'] {
    return this.userStorage.findUserByResetPasswordToken.bind(this.userStorage);
  }

  // Return the findUserByServiceId function from the userStorage
  public get findUserByServiceId(): DatabaseInterface['findUserByServiceId'] {
    return this.userStorage.findUserByServiceId.bind(this.userStorage);
  }

  // Return the addEmail function from the userStorage
  public get addEmail(): DatabaseInterface['addEmail'] {
    return this.userStorage.addEmail.bind(this.userStorage);
  }

  // Return the removeEmail function from the userStorage
  public get removeEmail(): DatabaseInterface['removeEmail'] {
    return this.userStorage.removeEmail.bind(this.userStorage);
  }

  // Return the verifyEmail function from the userStorage
  public get verifyEmail(): DatabaseInterface['verifyEmail'] {
    return this.userStorage.verifyEmail.bind(this.userStorage);
  }

  // Return the setUsername function from the userStorage
  public get setUsername(): DatabaseInterface['setUsername'] {
    return this.userStorage.setUsername.bind(this.userStorage);
  }

  // Return the setPassword function from the userStorage
  public get setPassword(): DatabaseInterface['setPassword'] {
    return this.userStorage.setPassword.bind(this.userStorage);
  }

  // Return the setService function from the userStorage
  public get setService(): DatabaseInterface['setService'] {
    return this.userStorage.setService.bind(this.userStorage);
  }

  // Return the unsetService function from the userStorage
  public get unsetService(): DatabaseInterface['unsetService'] {
    return this.userStorage.unsetService.bind(this.userStorage);
  }

  // Return the createSession function from the sessionStorage
  public get createSession(): DatabaseInterface['createSession'] {
    return this.sessionStorage.createSession.bind(this.sessionStorage);
  }

  // Return the updateSession function from the sessionStorage
  public get updateSession(): DatabaseInterface['updateSession'] {
    return this.sessionStorage.updateSession.bind(this.sessionStorage);
  }

  // Return the invalidateSession function from the sessionStorage
  public get invalidateSession(): DatabaseInterface['invalidateSession'] {
    return this.sessionStorage.invalidateSession.bind(this.sessionStorage);
  }

  // Return the invalidateAllSessions function from the sessionStorage
  public get invalidateAllSessions(): DatabaseInterface['invalidateAllSessions'] {
    return this.sessionStorage.invalidateAllSessions.bind(this.sessionStorage);
  }

  // Return the removeAllResetPasswordTokens function from the sessionStorage
  public get removeAllResetPasswordTokens(): DatabaseInterface['removeAllResetPasswordTokens'] {
    return this.userStorage.removeAllResetPasswordTokens.bind(this.userStorage);
  }

  // Return the findSessionByToken function from the sessionStorage
  public get findSessionByToken(): DatabaseInterface['findSessionByToken'] {
    return this.sessionStorage.findSessionByToken.bind(this.sessionStorage);
  }

  // Return the findSessionById function from the sessionStorage
  public get findSessionById(): DatabaseInterface['findSessionById'] {
    return this.sessionStorage.findSessionById.bind(this.sessionStorage);
  }

  // Return the addEmailVerificationToken function from the userStorage
  public get addEmailVerificationToken(): DatabaseInterface['addEmailVerificationToken'] {
    return this.userStorage.addEmailVerificationToken.bind(this.userStorage);
  }

  // Return the addResetPasswordToken function from the userStorage
  public get addResetPasswordToken(): DatabaseInterface['addResetPasswordToken'] {
    return this.userStorage.addResetPasswordToken.bind(this.userStorage);
  }

  // Return the setUserDeactivated function from the userStorage
  public get setUserDeactivated(): DatabaseInterface['setUserDeactivated'] {
    return this.userStorage.setUserDeactivated.bind(this.userStorage);
  }

  // Return the findAuthenticatorById function from the userStorage
  public get findAuthenticatorById(): DatabaseInterface['findAuthenticatorById'] {
    return this.userStorage.findAuthenticatorById.bind(this.userStorage);
  }

  // Return the findUserAuthenticators function from the userStorage
  public get findUserAuthenticators(): DatabaseInterface['findUserAuthenticators'] {
    return this.userStorage.findUserAuthenticators.bind(this.userStorage);
  }

  // Return the createAuthenticator function from the userStorage
  public get createAuthenticator(): DatabaseInterface['createAuthenticator'] {
    return this.userStorage.createAuthenticator.bind(this.userStorage);
  }

  // Return the activateAuthenticator function from the userStorage
  public get activateAuthenticator(): DatabaseInterface['activateAuthenticator'] {
    return this.userStorage.activateAuthenticator.bind(this.userStorage);
  }

  // Return the deactivateAuthenticator function from the userStorage
  public get deactivateAuthenticator(): DatabaseInterface['deactivateAuthenticator'] {
    return this.userStorage.deactivateAuthenticator.bind(this.userStorage);
  }

  // Return the updateAuthenticator function from the userStorage
  public get updateAuthenticator(): DatabaseInterface['updateAuthenticator'] {
    return this.userStorage.updateAuthenticator.bind(this.userStorage);
  }

  // Return the createMfaChallenge function from the userStorage
  public get createMfaChallenge(): DatabaseInterface['createMfaChallenge'] {
    return this.userStorage.createMfaChallenge.bind(this.userStorage);
  }

  // Return the findMfaChallengeByToken function from the userStorage
  public get findMfaChallengeByToken(): DatabaseInterface['findMfaChallengeByToken'] {
    return this.userStorage.findMfaChallengeByToken.bind(this.userStorage);
  }

  // Return the deactivateMfaChallenge function from the userStorage
  public get deactivateMfaChallenge(): DatabaseInterface['deactivateMfaChallenge'] {
    return this.userStorage.deactivateMfaChallenge.bind(this.userStorage);
  }

  // Return the updateMfaChallenge function from the userStorage
  public get updateMfaChallenge(): DatabaseInterface['updateMfaChallenge'] {
    return this.userStorage.updateMfaChallenge.bind(this.userStorage);
  }
}
