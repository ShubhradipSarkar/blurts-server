# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Asetukset
settings-page-title = { -product-short-name } -asetukset

## Breach alert preferences

settings-alert-preferences-title = Tietovuotoilmoitusten asetukset
settings-alert-preferences-option-one = Lähetä tietovuotoilmoitukset vuodettuun sähköpostiosoitteeseen
settings-alert-preferences-option-two = Lähetä kaikki tietovuotoilmoitukset ensisijaiseen sähköpostiosoitteeseen

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (ensisijainen)
settings-email-list-title = Valvottavat sähköpostiosoitteet
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Tilisi sisältää enintään { $limit } sähköpostiosoitteen valvonnan.
       *[other] Tilisi sisältää enintään { $limit } sähköpostiosoitteen valvonnan.
    }
settings-email-verification-callout = Sähköpostiosoitteen vahvistus vaaditaan
settings-resend-email-verification-link = Lähetä uudelleen vahvistussähköposti
settings-add-email-button = Lisää sähköpostiosoite
settings-delete-email-button = Poista sähköpostiosoite
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Esiintyy { $breachCount } tunnetussa tietovuodossa.
       *[other] Esiintyy { $breachCount } tunnetussa tietovuodossa.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Peruuta { -brand-premium }-tilaus
settings-cancel-premium-subscription-info = Tilauksesi muuttuu ilmaiseksi tiliksi nykyisen laskutusjakson päättyessä. Yksityisyyssuojauksen tarkastustulokset poistetaan pysyvästi, ja sinulla on vain yhden sähköpostiosoitteen valvonta tietovuotojen varalta.
settings-cancel-premium-subscription-link-label = Peruuta { -brand-fx-account }ltäsi

## Deactivate account

settings-deactivate-account-title = Poista tili käytöstä
# Deprecated
settings-deactivate-account-info = Voit poistaa { -product-short-name }in käytöstä poistamalla { -brand-fx-account }n.
settings-deactivate-account-info-2 = Voit poistaa { -product-short-name }in käytöstä poistamalla { -brand-mozilla-account }n.
# Deprecated
settings-fxa-link-label = Siirry { -brand-firefox }-asetuksiin
settings-fxa-link-label-3 = Siirry { -brand-mozilla-account }n asetuksiin

## Add email dialog

settings-email-dialog-title = Lisää toinen sähköpostiosoite
settings-add-email-text = Lisää uusi sähköpostiosoite nähdäksesi, onko se ollut osallisena tietovuodossa.
settings-email-input-label = Sähköpostiosoite
settings-send-email-verification-button = Lähetä vahvistuslinkki

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Ikävää, että lähdet. <br /> Kerrotko meille, miksi lähdet?
settings-unsubscribe-dialog-info = Kokemuksesi on meille tärkeä. Luemme jokaisen vastauksen ja otamme siinä kerrotut asiat huomioon.
settings-unsubscribe-dialog-message-placeholder = Mikä olisi voinut mennä paremmin?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Huomoi, että kaikki { -brand-monitor-premium } -palvelusi <a { $faq_href }>poistetaan pysyvästi</a> nykyisen laskutusjaksosi päätyttyä.
settings-unsubscribe-dialog-continue = Jatka peruutukseen
settings-unsubscribe-dialog-cancel = Unohdetaan tämä, palataan takaisin
