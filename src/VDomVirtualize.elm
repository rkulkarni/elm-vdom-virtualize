module VDomVirtualize (fromString) where

{-| API to convert HTML in string format to virtual-dom
# Conversion
@docs fromString
-}

import VirtualDom exposing (Node)
import Native.VDomVirtualize

{-| Takes string and convert it to Node

-}
fromString : String -> Node
fromString =
    Native.VDomVirtualize.fromString