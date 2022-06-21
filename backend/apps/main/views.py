import urllib

from django.utils.http import url_has_allowed_host_and_scheme, urlsafe_base64_decode
from django.shortcuts import render, resolve_url, redirect
from django.contrib.auth.views import LogoutView, LoginView as DjangoLoginView
from django.conf import settings
from django.utils.decorators import method_decorator
from django.views.decorators.debug import sensitive_post_parameters
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.cache import never_cache
from django.http import HttpResponseRedirect
from django.contrib.auth import logout
from oauth2_provider.views import AuthorizationView as OAUTHAuthorizationView
from django.conf import settings
from django.utils.http import urlsafe_base64_decode, urlencode


class AuthorizationView(OAUTHAuthorizationView):
    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated or request.GET.get('login', False):
            if request.user.is_authenticated:
                logout(request)
                params = request.GET.copy()
                del params['login']
                return redirect(f'{request.path}?{params.urlencode()}')
            return self.handle_no_permission()
        return super().dispatch(request, *args, **kwargs)
