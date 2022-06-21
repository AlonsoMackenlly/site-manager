from oauth2_provider.oauth2_validators import OAuth2Validator
from oauth2_provider.views import UserInfoView


class CustomOAuth2Validator(OAuth2Validator):
    def get_userinfo_claims(self, request):
        claims = super().get_userinfo_claims(request)
        claims["username"] = request.user.username
        return claims


class OIDCUserInfoView(UserInfoView):
    validator_class = CustomOAuth2Validator
