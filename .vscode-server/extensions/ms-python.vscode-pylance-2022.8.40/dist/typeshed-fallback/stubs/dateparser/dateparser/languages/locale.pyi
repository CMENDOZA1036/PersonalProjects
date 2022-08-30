from re import Pattern

from dateparser.conf import Settings

DIGIT_GROUP_PATTERN: Pattern[str]
NUMERAL_PATTERN: Pattern[str]

class Locale:
    shortname: str
    def __init__(self, shortname: str, language_info) -> None: ...
    def is_applicable(self, date_string: str, strip_timezone: bool = ..., settings: Settings | None = ...) -> bool: ...
    def count_applicability(self, text: str, strip_timezone: bool = ..., settings: Settings | None = ...): ...
    @staticmethod
    def clean_dictionary(dictionary, threshold: int = ...): ...
    def translate(self, date_string: str, keep_formatting: bool = ..., settings: Settings | None = ...) -> str: ...
    def translate_search(self, search_string, settings: Settings | None = ...): ...
    def get_wordchars_for_detection(self, settings): ...
    def to_parserinfo(self, base_cls=...): ...
